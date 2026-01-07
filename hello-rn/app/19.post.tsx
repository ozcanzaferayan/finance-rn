import { User } from '@/src/types/User';
import React, { useState } from 'react';
import { Button } from 'react-native';

const Index = () => {
  const [users, setUsers] = useState<User[]>([]);
  const API_URL = 'http://localhost:3000/users';

  const handleAddUser = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Definex',
      }),
    })
      .then((res) => res.json())
      .then((users) => setUsers(users));
  };

  return (
    <>
      <Button title="Add user" onPress={handleAddUser} />
    </>
  );
};

export default Index;
