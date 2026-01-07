import { User } from '@/src/types/User';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const API_URL = 'http://localhost:3000/user';
  const {
    data: users,
    isLoading: isUsersLoading,
    isError,
  } = useQuery<User[]>({
    // Cache parametresi
    queryKey: ['users'],
    // Ilk render sonrası çağrılacak event
    // useEffect gibi düşünebilirsin
    queryFn: () => fetch(API_URL).then((r) => r.json()),
  });

  if (isUsersLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Hata...</Text>;
  }

  return (
    <View>
      <Text>{users?.[0].name}</Text>
    </View>
  );
};

export default Index;
