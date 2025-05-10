import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tcarcjomjdvmceurriuu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYXJjam9tamR2bWNldXJyaXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1Mzk0NjAsImV4cCI6MjA2MjExNTQ2MH0.YWchR9cseDgnmSgXCjfrhDre7vB-G6vSiuVAbtphlKU'
);

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!password || !confirm) {
      setMessage('Harap isi semua kolom');
      return;
    }
    if (password !== confirm) {
      setMessage('Kata sandi tidak cocok');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(`Gagal: ${error.message}`);
    } else {
      setMessage('Berhasil reset password. Silakan login kembali.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 40, maxWidth: 400, margin: 'auto' }}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Kata sandi baru"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 12, width: '100%' }}
      />
      <input
        type="password"
        placeholder="Konfirmasi kata sandi"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        style={{ marginBottom: 12, width: '100%' }}
      />
      <button onClick={handleReset} disabled={loading} style={{ width: '100%' }}>
        {loading ? 'Mengatur ulang...' : 'Reset Password'}
      </button>
      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </div>
  );
}
