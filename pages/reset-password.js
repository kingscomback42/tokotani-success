import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tcarcjomjdvmceurriuu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYXJjam9tamR2bWNldXJyaXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1Mzk0NjAsImV4cCI6MjA2MjExNTQ2MH0.YWchR9cseDgnmSgXCjfrhDre7vB-G6vSiuVAbtphlKU'
);

xport default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!password || !confirm) return setMessage('Isi semua kolom');
    if (password !== confirm) return setMessage('Password tidak cocok');

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });

    if (error) setMessage(error.message);
    else setMessage('Berhasil reset password');
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Reset Password</h2>
      <input placeholder="Password baru" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <input placeholder="Konfirmasi" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
      <button onClick={handleReset} disabled={loading}>
        {loading ? 'Reset...' : 'Reset Password'}
      </button>
      <p>{message}</p>
    </div>
  );
}
