import { useEffect, useState } from 'react';

export default function Callback() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    // URL'den kodu al
    const params = new URLSearchParams(window.location.search);
    const codeParam = params.get('code');
    setCode(codeParam);
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>OAuth Callback</h1>
      {code ? (
        <>
          <p>Authorization code received:</p>
          <code style={{ background: '#f4f4f4', padding: 8, borderRadius: 4 }}>{code}</code>
        </>
      ) : (
        <p>Waiting for authorization code...</p>
      )}
    </main>
  );
} 