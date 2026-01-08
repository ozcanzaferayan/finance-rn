import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { BUTTON_RADIUS, BUTTON_SIZES } from './button.sizes';
import { BUTTON_VARIANTS } from './button.styles';

type Variant = keyof typeof BUTTON_VARIANTS;
type Size = keyof typeof BUTTON_SIZES;
type Radius = keyof typeof BUTTON_RADIUS;

type ButtonProps = {
  label: string;
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  onPress?: () => void;
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  radius = 'md',
  fullWidth,
  loading,
  disabled,
  className,
  textClassName,
  onPress,
}: ButtonProps) {
  const v = BUTTON_VARIANTS[variant];
  const s = BUTTON_SIZES[size];
  const isDisabled = disabled || loading;

  return (
    <Pressable disabled={isDisabled} onPress={onPress}>
      {({ pressed }) => (
        <View
          className={cx(
            // base
            'flex-row items-center justify-center',
            s.container,
            s.gap,
            BUTTON_RADIUS[radius],

            // width
            fullWidth && 'w-full',

            // state
            isDisabled ? v.disabled : pressed ? v.pressed : v.container,

            // external override 👇
            className
          )}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              className={cx(
                'font-semibold',
                s.text,
                v.text,
                textClassName // 👈 text override
              )}>
              {label}
            </Text>
          )}
        </View>
      )}
    </Pressable>
  );
}
