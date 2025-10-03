import { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useThemeStore } from '@/stores/theme-store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { preset } = useThemeStore();

  useEffect(() => {
    // Apply theme preset to root element
    document.documentElement.setAttribute('data-theme-preset', preset);
  }, [preset]);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
