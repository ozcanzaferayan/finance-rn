import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { TouchableOpacity } from 'react-native';
const Index = () => {
  return (
    <TouchableOpacity className="h-24 w-24 items-center justify-center rounded-full bg-blue-500 shadow">
      <AntDesign name="home" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default Index;
