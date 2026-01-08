// components/button.sizes.ts
export const BUTTON_SIZES = {
  sm: {
    container: 'h-9 px-4',
    text: 'text-sm',
    gap: 'gap-2',
  },
  md: {
    container: 'h-11 px-5',
    text: 'text-base',
    gap: 'gap-2.5',
  },
  lg: {
    container: 'h-14 px-6',
    text: 'text-lg',
    gap: 'gap-3',
  },
} as const;

export const BUTTON_RADIUS = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
} as const;
