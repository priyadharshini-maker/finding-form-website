import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function OtpModal({ isOpen, onClose, onSuccess }: OtpModalProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send OTP');
      
      if (data.demoMode) {
        alert(`DEMO MODE: Your OTP is ${data.demoOtp}\n\n(To send real SMS, configure Twilio environment variables)`);
      }
      
      setStep('otp');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;
    
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to verify OTP');
      
      // Success!
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-bg w-full max-w-md p-8 relative shadow-2xl border border-line"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 opacity-50 hover:opacity-100 transition-opacity"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-serif italic mb-2">Secure Access</h2>
            <p className="text-sm opacity-60 mb-8">
              {step === 'phone' 
                ? 'Please enter your authorized phone number to view this project.' 
                : `Enter the 6-digit code sent to ${phone}`}
            </p>

            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm border border-red-100">
                {error}
              </div>
            )}

            {step === 'phone' ? (
              <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-widest opacity-50">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9787542461"
                    className="w-full bg-transparent border-b border-ink/20 py-2 focus:outline-none focus:border-ink transition-colors"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading || !phone}
                  className="mt-4 bg-ink text-bg py-3 text-sm uppercase tracking-widest font-medium disabled:opacity-50 transition-opacity"
                >
                  {loading ? 'Sending...' : 'Send OTP'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-widest opacity-50">Verification Code</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    maxLength={6}
                    className="w-full bg-transparent border-b border-ink/20 py-2 focus:outline-none focus:border-ink transition-colors tracking-widest"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading || !otp}
                  className="mt-4 bg-ink text-bg py-3 text-sm uppercase tracking-widest font-medium disabled:opacity-50 transition-opacity"
                >
                  {loading ? 'Verifying...' : 'Verify & View'}
                </button>
                <button 
                  type="button"
                  onClick={() => setStep('phone')}
                  className="text-xs opacity-50 hover:opacity-100 uppercase tracking-widest mt-2"
                >
                  Change Phone Number
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
