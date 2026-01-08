import React from 'react';
import { useColorScheme, View } from 'react-native';

const ThemedView = ({ children }: { children: React.ReactNode }) => {
  const scheme = useColorScheme();
  const bg = scheme === 'light' ? 'bg-white' : 'bg-black';
  return <View className={bg + ' flex-1'}>{children}</View>;
};

export default ThemedView;
