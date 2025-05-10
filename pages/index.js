import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexRedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const { type } = router.query;

    if (type === 'signup') {
      router.replace('/success');
    } else if (type === 'recovery') {
      router.replace('/reset-password');
    }
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>🔄 Mengalihkan...</h2>
      <p>Silakan tunggu sebentar...</p>
    </div>
  );
}
