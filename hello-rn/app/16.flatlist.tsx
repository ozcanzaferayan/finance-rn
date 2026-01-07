import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';

const Index = () => {
  const [names, setNames] = useState(['Zafer', 'Hello', 'World', 'DefineX']);

  return (
    <FlatList
      data={names}
      keyExtractor={(name) => name}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};

export default Index;
