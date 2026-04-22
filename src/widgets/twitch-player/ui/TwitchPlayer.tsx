import { useEffect, useRef } from 'react';

import { useTwitchScript } from '../hooks/useTwitchScript';

interface TwitchPlayerProps {
  channel: string;
  video?: string;
  width?: string | number;
  height?: string | number;
}
declare global {
  interface Window {
    Twitch: {
      Embed: new (
        element: HTMLElement,
        options: {
          width: string | number;
          height: string | number;
          channel?: string;
          video?: string;
          layout?: 'video' | 'video-with-chat';
          autoplay?: boolean;
          parent: string[];
        }
      ) => unknown;
    };
  }
}

export const TwitchPlayer = ({
  channel,
  video,
  width = '100%',
  height = 480,
}: TwitchPlayerProps) => {
  const embedRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<unknown>(null);
  const isReady = useTwitchScript();

  useEffect(() => {
    const embededCurrent = embedRef.current;
    if (!isReady || !embededCurrent) return;

    embededCurrent.innerHTML = '';

    playerRef.current = new window.Twitch.Embed(embededCurrent, {
      width,
      height,
      channel,
      video,
      layout: 'video',
      autoplay: true,
      parent: [window.location.hostname],
    });

    return () => {
      if (embededCurrent) embededCurrent.innerHTML = '';
      playerRef.current = null;
    };
  }, [channel, video, height, width, isReady]);
  return <div style={{ aspectRatio: 16 / 9 }} ref={embedRef} />;
};
