import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function VerifyPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    if (type === 'signup') {
      router.replace('/success');
    } else if (type === 'recovery') {
      router.replace('/reset-password');
    }
  }, []);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>🔄 Memproses verifikasi...</h2>
      <p>Mohon tunggu sebentar.</p>
    </div>
  );
}
