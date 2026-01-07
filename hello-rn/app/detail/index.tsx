import { useUser } from '@/src/hooks/useUser';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Detail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const {data: user} = useUser(id);
  return (
    <View>
      <Text>{user?.name}</Text>
    </View>
  );
};

export default Detail;
