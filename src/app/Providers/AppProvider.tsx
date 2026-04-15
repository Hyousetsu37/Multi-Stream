import type { ReactNode } from 'react';

import { ThemeProvider } from './ThemeProvider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  <ThemeProvider>{children}</ThemeProvider>;
};
