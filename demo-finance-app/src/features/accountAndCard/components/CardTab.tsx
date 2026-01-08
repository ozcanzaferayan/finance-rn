import { Button } from '@/src/components/Button/Button';
import { Master, Visa } from '@/src/icons';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CardTab = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View className="flex-1 justify-between p-4" style={{ paddingBottom: bottom }}>
      <View>
        {/* Blue Card */}
        <TouchableOpacity onPress={() => router.push('/cards/3')}>
          <ImageBackground
            source={require('../../../../assets/images/card-blue.png')}
            className="h-[244px] w-full"
            imageClassName="rounded-2xl"
            resizeMode="cover">
            <Text className="absolute left-12 top-20 text-3xl text-white">John Smith</Text>
            <Text className="absolute left-12 top-40 text-2xl text-white">Amazon Platinium</Text>
            <Text className="absolute left-12 top-52 text-2xl text-white">4756 **** **** 3212</Text>
            <Text className="absolute left-12 top-64 text-2xl text-white">$3.469.52</Text>
            <Master
              width={48}
              height={48}
              style={{ position: 'absolute', bottom: 80, right: 50 }}
            />
          </ImageBackground>
        </TouchableOpacity>
        {/* Yellow Card */}
        <ImageBackground
          source={require('../../../../assets/images/card-yellow.png')}
          className="h-[314px] w-full"
          imageClassName="rounded-2xl"
          resizeMode="contain">
          <Text className="absolute left-12 top-20 text-3xl text-white">John Smith</Text>
          <Text className="absolute left-12 top-40 text-2xl text-white">Amazon Platinium</Text>
          <Text className="absolute left-12 top-52 text-2xl text-white">4756 **** **** 3212</Text>
          <Text className="absolute left-12 top-64 text-2xl text-white">$3.469.52</Text>
          <Visa width={48} height={48} style={{ position: 'absolute', bottom: 80, right: 50 }} />
        </ImageBackground>
      </View>

      <Button size="lg" variant="primary" label="Add Card" />
    </View>
  );
};

export default CardTab;
