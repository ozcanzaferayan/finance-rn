// rnfe
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Index = () => {
  // usss
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        className="m-4 rounded border-2 p-4 text-2xl"
      />
      <Text className="text-6xl">{text}</Text>
    </View>
  );
};

export default Index;
