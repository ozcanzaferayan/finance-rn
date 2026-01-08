import { Button } from '@/src/components/Button/Button';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CardDetail = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View className="flex-1 justify-between bg-white p-4" style={{ paddingBottom: bottom }}>
      <View className="flex-1 gap-4">
        <View className="flex-row justify-between gap-8">
          <Text className="text-2xl font-semibold text-gray-500">Name</Text>
          <Text
            className="text-primary flex-1 text-2xl font-semibold"
            numberOfLines={1}
            textBreakStrategy="simple">
            asdsadasdsasds asdsadas asdsad AYAN asdas
          </Text>
        </View>
        <View className="h-px bg-gray-500" />
        <View className="flex-row justify-between">
          <Text className="text-2xl font-semibold text-gray-500">Name</Text>
          <Text className="text-primary text-2xl font-semibold">Zafer AYAN</Text>
        </View>
        <View className="h-px bg-gray-500" />
        <View className="flex-row justify-between">
          <Text className="text-2xl font-semibold text-gray-500">Name</Text>
          <Text className="text-primary text-2xl font-semibold">Zafer AYAN</Text>
        </View>
        <View className="h-px bg-gray-500" />
        <View className="flex-row justify-between">
          <Text className="text-2xl font-semibold text-gray-500">Name</Text>
          <Text className="text-primary text-2xl font-semibold">Zafer AYAN</Text>
        </View>
      </View>
      <Button
        variant="danger"
        label="Delete Card"
        size="lg"
        className="border-2 border-red-500 bg-white"
        textClassName="text-red-500 text-xl"
      />
    </View>
  );
};

export default CardDetail;
