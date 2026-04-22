import { RouterProvider } from 'react-router';

import { appRouter } from './Providers/router';
import { useThemeSync } from './Providers/Theme/hook/useThemeSync';

export const App = () => {
  useThemeSync();
  return <RouterProvider router={appRouter} />;
};
