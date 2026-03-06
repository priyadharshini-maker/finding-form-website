import express from 'express';
import { createServer as createViteServer } from 'vite';
import twilio from 'twilio';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// In-memory store for OTPs (for demo/prototype purposes)
const otpStore = new Map<string, { otp: string, expiresAt: number }>();

// Allowed numbers - we strip non-digits for comparison
const ALLOWED_NUMBERS = ['9787542461'];

let twilioClient: twilio.Twilio | null = null;
function getTwilio() {
  if (!twilioClient) {
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    if (!sid || !token) {
      return null;
    }
    twilioClient = twilio(sid, token);
  }
  return twilioClient;
}

app.post('/api/auth/send-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: 'Phone number is required' });

    // Clean phone number (remove spaces, dashes, etc.)
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if allowed (check if it ends with the allowed number to handle country codes)
    const isAllowed = ALLOWED_NUMBERS.some(num => cleanPhone.endsWith(num));
    if (!isAllowed) {
      return res.status(403).json({ error: 'This phone number is not authorized to view this project.' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(cleanPhone, { otp, expiresAt: Date.now() + 5 * 60 * 1000 }); // 5 mins expiry

    // Send SMS via Twilio
    const client = getTwilio();
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (client && fromNumber) {
      // Ensure it has a country code. If it's a 10-digit Indian number, prepend +91
      const toPhone = cleanPhone.length === 10 ? `+91${cleanPhone}` : `+${cleanPhone}`;

      await client.messages.create({
        body: `Your Trubuild verification code is: ${otp}`,
        from: fromNumber,
        to: toPhone
      });

      res.json({ success: true, message: 'OTP sent successfully' });
    } else {
      console.log(`[DEMO MODE] Twilio credentials missing. OTP for ${cleanPhone} is: ${otp}`);
      res.json({ 
        success: true, 
        message: 'OTP generated in DEMO mode', 
        demoMode: true,
        demoOtp: otp 
      });
    }
  } catch (error: any) {
    console.error('OTP Send Error:', error);
    res.status(500).json({ error: error.message || 'Failed to send OTP' });
  }
});

app.post('/api/auth/verify-otp', (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({ error: 'Phone and OTP are required' });

  const cleanPhone = phone.replace(/\D/g, '');
  const record = otpStore.get(cleanPhone);

  if (!record) return res.status(400).json({ error: 'No OTP requested for this number or it has expired.' });
  if (Date.now() > record.expiresAt) {
    otpStore.delete(cleanPhone);
    return res.status(400).json({ error: 'OTP has expired. Please request a new one.' });
  }
  if (record.otp !== otp) return res.status(400).json({ error: 'Invalid OTP code.' });

  // Clear OTP after successful verification
  otpStore.delete(cleanPhone);
  
  // In a real app, you would issue a JWT session token here.
  // For this prototype, we just return success.
  res.json({ success: true, token: 'verified-session-token' });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
