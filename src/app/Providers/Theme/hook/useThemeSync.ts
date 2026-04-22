import { useEffect } from 'react';

import { useThemeStore } from '../ThemeStore';

export const useThemeSync = () => {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'dark') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
};
