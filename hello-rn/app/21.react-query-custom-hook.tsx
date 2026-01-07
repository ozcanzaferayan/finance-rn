import { useUsers } from '@/src/hookswithFetch/useUsers';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const { data: users } = useUsers();

  return (
    <View>
      <Text>{users?.[0].name}</Text>
    </View>
  );
};

export default Index;
