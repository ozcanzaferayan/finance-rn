import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

const Index = () => {
  const [names, setNames] = useState(['Zafer', 'Hello', 'World', 'DefineX']);

  return (
    <ScrollView>
      {names.map((name) => (
        <Text key={name}>{name}</Text>
      ))}
    </ScrollView>
  );
};

export default Index;
