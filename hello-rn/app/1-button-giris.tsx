import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Index = () => {
  const handlePress = () => {
    alert('Hello World');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Hello</Text>
    </TouchableOpacity>
  );
};

export default Index;
