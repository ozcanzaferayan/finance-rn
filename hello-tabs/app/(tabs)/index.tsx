import MyAwesomeComponent from '@/src/components/MyAwesomeComponent';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  console.log('rendered index');
  return (
    <SafeAreaView>
      <MyAwesomeComponent />
    </SafeAreaView>
  );
};

export default Index;
