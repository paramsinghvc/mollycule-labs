'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import CookieConsent from './cookie-consent';

export default function Analytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookie_consent') === 'true') {
      setAccepted(true);
    }
  }, []);

  return (
    <>
      {process.env.NODE_ENV === 'production' && accepted && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-WYDZBVJ770"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-WYDZBVJ770');
              `,
            }}
          />
        </>
      )}
      <CookieConsent onConsent={() => setAccepted(true)} />
    </>
  );
}
