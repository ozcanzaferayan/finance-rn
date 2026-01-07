import React from 'react';
import { View } from 'react-native';

const index = () => {
  return (
    <View>
      {/* Yatay eksende */}
      <View className="flex-row gap-4">
        <View className="h-24 w-24 bg-blue-500" />
        <View className="h-24 w-24 bg-blue-500" />
        <View className="h-24 w-24 bg-blue-500" />
        <View className="h-24 w-24 bg-blue-500" />
      </View>
      {/* Düşey eksende */}
      <View className="flex-column gap-4">
        <View className="h-24 w-24 bg-blue-500" />
        <View className="h-24 w-24 bg-blue-500" />
        <View className="h-24 w-24 bg-blue-500" />
        <View className="h-24 w-24 bg-blue-500" />
      </View>
    </View>
  );
};

export default index;
