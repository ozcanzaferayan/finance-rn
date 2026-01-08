import Counter from '@/src/components/Counter';
import React from 'react';
import { View } from 'react-native';

const detail = () => {
  console.log('Detail Rendered');
  return (
    <View>
      <Counter />
    </View>
  );
};

export default detail;
