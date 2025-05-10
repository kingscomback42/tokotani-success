import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomeRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const { type } = router.query;

    if (type === 'recovery') {
      router.replace('/reset-password');
    } else if (type === 'signup') {
      router.replace('/success');
    }
  }, [router.query]);

  return <div>Redirecting...</div>;
}
