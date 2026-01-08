import React from 'react';
import { Text, useColorScheme } from 'react-native';

const ThemedText = ({ children }: { children: React.ReactNode }) => {
  const scheme = useColorScheme();
  const text = scheme === 'light' ? 'text-black' : 'text-white';
  return <Text className={text + ' text-6xl'}>{children}</Text>;
};

export default ThemedText;
