import React from 'react';
import { View } from 'react-native';

const index = () => {
  return (
    <View className="flex-1 flex-row items-end justify-evenly bg-blue-100">
      <View className="h-24 w-24  bg-red-500" />
      <View className="h-24 w-24 bg-blue-500" />
      <View className="h-24 w-24 bg-green-500" />
      <View className="h-24 w-24 bg-orange-500" />
    </View>
  );
};

export default index;
