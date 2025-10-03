import { Palette, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useThemeStore } from '@/stores/theme-store';

const THEME_PRESETS = [
  { value: 'default', label: 'Neutral', description: 'Clean & professional' },
  { value: 'tangerine', label: 'Tangerine', description: 'Warm Islamic aesthetic' },
  { value: 'brutalist', label: 'Brutalist', description: 'Bold & high-contrast' },
  { value: 'soft-pop', label: 'Soft Pop', description: 'Gentle & friendly' },
] as const;

export function ThemeSwitcher() {
  const { preset, setPreset } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" title="Change theme">
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Theme Preset</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {THEME_PRESETS.map((themePreset) => (
          <DropdownMenuItem
            key={themePreset.value}
            onClick={() => setPreset(themePreset.value)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <span className="font-medium">{themePreset.label}</span>
                <span className="text-xs text-muted-foreground">
                  {themePreset.description}
                </span>
              </div>
              {preset === themePreset.value && (
                <Check className="h-4 w-4 ml-2" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
