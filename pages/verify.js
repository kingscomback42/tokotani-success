import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function VerifyPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('access_token');

    if (token) {
      router.replace('/success');
    } else {
      router.replace('/');
    }
  }, []);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>🔄 Verifikasi akun...</h2>
      <p>Mohon tunggu sebentar.</p>
    </div>
  );
}
