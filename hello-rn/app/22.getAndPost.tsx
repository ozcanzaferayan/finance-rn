import { useAddUser } from '@/src/hooks/useAddUser';
import { useUsers } from '@/src/hooks/useUsers';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';

const Index = () => {
  const { mutate: addUser } = useAddUser();
  const { data: users } = useUsers();

  return (
    <View>
      <Button
        title="Add User"
        onPress={() =>
          addUser({
            name: 'Zafer',
          })
        }
      />
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Index;
