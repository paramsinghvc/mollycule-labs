'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent({ onConsent }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    } else if (consent === 'true' && onConsent) {
      onConsent();
    }
  }, [onConsent]);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
    if (onConsent) onConsent();
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 z-50">
      <span className="text-center sm:text-left leading-relaxed">
        We use cookies for analytics. Choose <b>Accept</b> to enable or{' '}
        <b>Decline</b> to continue without.
      </span>
      <div className="flex justify-center sm:justify-end gap-2">
        <button
          onClick={acceptCookies}
          className="bg-blue-500 px-4 py-2 rounded cursor-pointer text-white font-medium w-full sm:w-auto"
        >
          Accept
        </button>
        <button
          onClick={declineCookies}
          className="bg-gray-600 px-4 py-2 rounded cursor-pointer text-white font-medium w-full sm:w-auto"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
