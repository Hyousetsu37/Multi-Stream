import { useEffect, useState } from 'react';

export const useTwitchScript = () => {
  const [ready, setReady] = useState(() => !!window.Twitch);

  useEffect(() => {
    if (window.Twitch) return;

    const existing = document.querySelector(
      'script[src="https://embed.twitch.tv/embed/v1.js"]'
    );

    if (existing) {
      existing.addEventListener('load', () => {
        setReady(true);
      });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://embed.twitch.tv/embed/v1.js';
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);
  return ready;
};
