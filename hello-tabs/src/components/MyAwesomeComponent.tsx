import React from 'react';
import { Text, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

const MyAwesomeComponent = () => {
  const { username } = useAuth();
  console.log('rendered awesome');

  return (
    <View>
      <Text>{username}</Text>
    </View>
  );
};

export default MyAwesomeComponent;
