import { createBrowserRouter } from 'react-router';

import { ThemeSwitch } from '@/shared/ui/ThemeSwitch';

// eslint-disable-next-line react-refresh/only-export-components
const Welcome = () => {
  return (
    <nav>
      <ThemeSwitch />
    </nav>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const SomeEl = () => {
  return (
    <div className="flex flex-wrap ">
      <iframe
        src="https://player.twitch.tv/?channel=imperialhal__&parent=localhost"
        height="480"
        width="854"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://player.twitch.tv/?channel=gild&parent=localhost"
        height="480"
        width="854"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://player.twitch.tv/?channel=wxltzy&parent=localhost"
        height="480"
        width="854"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export const appRouter = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/watch', element: <SomeEl /> },
]);
