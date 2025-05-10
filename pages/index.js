import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomeRedirectPage() {
  const router = useRouter();
  const { type } = router.query;

  useEffect(() => {
    if (type === 'signup') {
      router.replace('/success');
    } else if (type === 'recovery') {
      router.replace('/reset-password');
    }
  }, [type]);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>Mengalihkan...</h2>
      <p>Mohon tunggu sebentar...</p>
    </div>
  );
}
