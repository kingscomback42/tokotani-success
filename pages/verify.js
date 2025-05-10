import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function VerifyPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code'); // kode dari Supabase
    const type = params.get('type'); // bisa 'recovery' atau 'signup'

    // Jika ada code atau access_token, kita anggap sukses
    if (code) {
      if (type === 'recovery') {
        router.replace('/reset-password?code=' + code);
      } else {
        router.replace('/success');
      }
    }
  }, []);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>🔄 Memproses verifikasi akun...</h2>
      <p>Mohon tunggu sebentar.</p>
    </div>
  );
}
