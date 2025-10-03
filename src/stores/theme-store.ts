import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemePreset = 'default' | 'tangerine' | 'brutalist' | 'soft-pop';

interface ThemeStore {
  preset: ThemePreset;
  setPreset: (preset: ThemePreset) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      preset: 'default',
      setPreset: (preset) => {
        set({ preset });
        // Update DOM immediately
        document.documentElement.setAttribute('data-theme-preset', preset);
      },
    }),
    {
      name: 'scholar-admin-theme-preset',
    }
  )
);

// Initialize theme on load
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('scholar-admin-theme-preset');
  if (stored) {
    try {
      const { state } = JSON.parse(stored);
      document.documentElement.setAttribute('data-theme-preset', state.preset || 'default');
    } catch {
      document.documentElement.setAttribute('data-theme-preset', 'default');
    }
  }
}
