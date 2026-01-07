import { User } from '@/src/types/User';
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';

const Index = () => {
  const [users, setUsers] = useState<User[]>([]);
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  // uffs
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      {users.length === 0 ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => <Text>{item.username}</Text>}
        />
      )}
    </>
  );
};

export default Index;
