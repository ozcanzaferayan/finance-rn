import React from 'react';
import { View } from 'react-native';

const index = () => {
  return (
    <View className="flex-row gap-4">
      <View className="h-24 flex-1 bg-red-500" />
      <View className="h-24 flex-1 bg-blue-500" />
      <View className="h-24 flex-1 bg-green-500" />
    </View>
  );
};

export default index;
