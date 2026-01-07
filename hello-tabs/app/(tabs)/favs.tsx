import { useAuth } from '@/src/contexts/AuthContext';
import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const Favs = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { username, setUsername } = useAuth();
  console.log('rendered favs');

  return (
    <SafeAreaView>
      <Text className="text-6xl">{username}</Text>
      <Button title="Tıkla" onPress={() => setUsername('DefineX')} />
    </SafeAreaView>
  );
};

export default Favs;
