import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tcarcjomjdvmceurriuu.supabase.co',
  'YOUR_ANON_KEY' // Ganti dengan anon key kamu
);

export default function VerifyPage() {
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);
    const hashFragment = url.hash;
    const queryString = url.search;

    // Gabungkan query dan hash karena kadang Supabase pakai hash
    const fullURL = `${queryString}${hashFragment}`;

    supabase.auth
      .exchangeCodeForSession(fullURL)
      .then(({ error }) => {
        if (error) {
          console.error('Gagal tukar session:', error.message);
          router.replace('/');
        } else {
          // Cek apakah ini recovery (lupa password)
          const params = new URLSearchParams(window.location.search);
          const type = params.get('type');

          if (type === 'recovery') {
            router.replace('/reset-password');
          } else {
            router.replace('/success');
          }
        }
      });
  }, []);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>🔄 Memproses token Supabase...</h2>
      <p>Mohon tunggu sebentar...</p>
    </div>
  );
}
