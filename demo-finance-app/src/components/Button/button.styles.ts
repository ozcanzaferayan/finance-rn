// components/button.styles.ts
export const BUTTON_VARIANTS = {
  primary: {
    container: 'bg-primary',
    pressed: 'bg-primary-pressed',
    disabled: 'bg-primary-disabled',
    text: 'text-primary-foreground',
  },
  secondary: {
    container: 'bg-secondary',
    pressed: 'bg-secondary-pressed',
    disabled: 'bg-secondary-disabled',
    text: 'text-secondary-foreground',
  },
  danger: {
    container: 'bg-danger',
    pressed: 'bg-danger-pressed',
    disabled: 'bg-danger-disabled',
    text: 'text-danger-foreground',
  },
  success: {
    container: 'bg-success',
    pressed: 'bg-success-pressed',
    disabled: 'bg-success-disabled',
    text: 'text-success-foreground',
  },
} as const;
