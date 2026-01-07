import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Index = () => {
  // usss
  const [sayi, setSayi] = useState(42);
  console.log("Rendered")

  const handlePress = () => {
    setSayi(sayi + 1);
    setSayi(sayi + 1);
    setSayi(sayi + 1);
    setSayi(sayi + 1);
    setSayi(sayi + 1);
  };

  return (
    <View>
      <Button title="Arttır" onPress={handlePress} />
      <Text className="text-6xl">{sayi}</Text>
    </View>
  );
};

export default Index;
