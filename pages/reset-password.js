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
    if (!password || !confirm) return setMessage('Isi semua kolom');
    if (password !== confirm) return setMessage('Password tidak cocok');

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });

    if (error) setMessage(`Gagal: ${error.message}`);
    else setMessage('✅ Berhasil ubah password');
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Password baru"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Konfirmasi password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={handleReset} disabled={loading}>
        {loading ? 'Memproses...' : 'Reset Password'}
      </button>
      <p>{message}</p>
    </div>
  );
}
