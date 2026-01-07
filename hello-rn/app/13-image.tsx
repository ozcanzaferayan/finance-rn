import React from 'react';
import { Image, View } from 'react-native';

const Index = () => {
  const imgUrl = 'https://cdn.pixabay.com/photo/2025/11/07/15/43/halloween-9943242_960_720.jpg';
  return (
    <View>
      {/* Local image */}
      <Image
        source={require('../assets/icon.png')}
        className="h-48 w-48"
        onError={({ nativeEvent: { error } }) => console.log(error)}
      />
      {/* Network image */}
      <Image source={{ uri: imgUrl }} className="h-48 w-48" />
      <Image source={{ uri: imgUrl }} className="h-48 w-48" resizeMode="center" />
      <Image source={{ uri: imgUrl }} className="h-48 w-48" resizeMode="contain" />
      <Image source={{ uri: imgUrl }} className="h-48 w-48" resizeMode="stretch" />
    </View>
  );
};

export default Index;
