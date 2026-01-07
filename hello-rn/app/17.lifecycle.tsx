import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  console.log('Rendered');
  // uffs
  useEffect(() => {
    console.log('After render');
    return () => {
      console.log('Destroyed');
    };
  }, []);

  return (
    <View>
      <Text>Index</Text>
    </View>
  );
};

export default Index;
