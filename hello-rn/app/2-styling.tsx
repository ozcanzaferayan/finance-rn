import Button from '@/src/components/Button';
import React from 'react';
import { View } from 'react-native';

const Index = () => {
  return (
    <View>
      <Button />
      <Button title="World" variant="primary" />
      <Button title="DefineX" variant="secondary" />
      <Button title="Hata" variant="danger" />
      <Button title="Başarılı" variant="success" />
      <Button title="Uyarı" variant="warning" />
    </View>
  );
};

export default Index;
