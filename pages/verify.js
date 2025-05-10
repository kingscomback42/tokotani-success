import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function VerifyPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('access_token');

    if (token) {
      // Anggap verifikasi berhasil jika ada access_token haha
      router.replace('/success');
    } else {
      // Kalau tidak ada, fallback ke halaman utama
      router.replace('/');
    }
  }, []);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>🔄 Memproses verifikasi akun...</h2>
      <p>Mohon tunggu sebentar.</p>
    </div>
  );
}
