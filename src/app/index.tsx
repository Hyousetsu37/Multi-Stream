import { Button } from '@/shared/ui/button';

import { ThemeProvider } from './Providers/Theme/ThemeProvider';

export const App = () => {
  return (
    <ThemeProvider>
      <h1>App</h1>
      <Button variant={'outline'} className="w-full">
        Some button
      </Button>
    </ThemeProvider>
  );
};
