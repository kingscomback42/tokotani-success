import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const { type } = router.query;

    if (type === 'signup') {
      console.log('Verifikasi berhasil!');
    }
  }, [router.query]);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>✅ Verifikasi Berhasil</h1>
      <p>Silakan kembali ke aplikasi dan login.</p>
    </div>
  );
}
