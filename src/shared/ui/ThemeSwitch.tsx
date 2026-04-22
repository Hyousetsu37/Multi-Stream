import { RiMoonLine, RiSunLine } from '@remixicon/react';

import { useThemeStore } from '@/app/Providers/Theme/ThemeStore';

import { Switch } from './switch';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useThemeStore();
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme:dark)').matches);
  return (
    <div className="flex items-center space-x-2">
      <RiSunLine className="h-4 w-4" />
      <Switch
        id="theme-switch"
        checked={isDark}
        onCheckedChange={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      />
      <RiMoonLine className="h-4 w-4" />
    </div>
  );
};
