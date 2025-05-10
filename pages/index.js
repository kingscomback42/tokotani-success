import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexRedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const type = searchParams.get('type');

    if (type === 'signup') {
      router.replace('/success');
    } else if (type === 'recovery') {
      router.replace('/reset-password');
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>🔄 Mengalihkan...</h2>
      <p>Mohon tunggu sebentar...</p>
    </div>
  );
}
//lieur anjooy
