import express from 'express';
import { createServer as createViteServer } from 'vite';

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

// In-memory store for OTPs
const otpStore = new Map<string, { otp: string, expiresAt: number }>();

// ── Authorized Indian mobile numbers (10 digits, no country code) ──────────
const ALLOWED_NUMBERS = ['8098962404'];

app.post('/api/auth/send-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: 'Phone number is required' });

    // Keep only digits, strip country code if present
    const cleanPhone = phone.replace(/\D/g, '').replace(/^91(\d{10})$/, '$1');

    const isAllowed = ALLOWED_NUMBERS.some(num => num === cleanPhone);
    if (!isAllowed) {
      return res.status(403).json({ error: 'This phone number is not authorized to view this project.' });
    }

    // Generate 6-digit OTP (5-minute expiry)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(cleanPhone, { otp, expiresAt: Date.now() + 5 * 60 * 1000 });

    const fast2smsKey = process.env.FAST2SMS_API_KEY;

    if (fast2smsKey) {
      // Send via Fast2SMS OTP route (no DLT registration required)
      const response = await fetch(
        `https://www.fast2sms.com/dev/bulkV2?authorization=${fast2smsKey}&variables_values=${otp}&route=otp&numbers=${cleanPhone}`,
        { method: 'GET', headers: { 'cache-control': 'no-cache' } }
      );
      const data = await response.json() as { return: boolean; message: string[] };
      if (!data.return) {
        throw new Error(data.message?.join(', ') || 'Fast2SMS failed to send OTP');
      }
      res.json({ success: true, message: 'OTP sent successfully' });
    } else {
      // Demo mode — OTP shown in browser alert (for local testing)
      console.log(`[DEMO MODE] FAST2SMS_API_KEY not set. OTP for ${cleanPhone} is: ${otp}`);
      res.json({ success: true, message: 'OTP generated in DEMO mode', demoMode: true, demoOtp: otp });
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
