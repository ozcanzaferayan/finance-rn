import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const [names, setNames] = useState(['Zafer', 'Hello', 'World', 'DefineX']);

  return (
    <View>
      {names.map((name) => (
        <Text key={name}>{name}</Text>
      ))}
    </View>
  );
};

export default Index;
