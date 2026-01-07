import { useUsers } from '@/src/hooks/useUsers';
import { router } from 'expo-router';
import React from 'react';
import { Button, FlatList, View } from 'react-native';

const Index = () => {
  const { data: users } = useUsers();

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <Button title={item.name} 
          onPress={() => router.push(`/users/${item.id}`)} />
        )}
      />
    </View>
  );
};

export default Index;
