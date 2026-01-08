import { Button } from '@/src/components/Button/Button';
import AccountTab from '@/src/features/accountAndCard/components/AccountTab';
import CardTab from '@/src/features/accountAndCard/components/CardTab';
import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'account' | 'card'>('card');
  const { width } = useWindowDimensions();
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row gap-4 p-4" style={{ width: 320 }}>
        <Button
          onPress={() => setActiveTab('account')}
          label="Account"
          variant={activeTab === 'account' ? 'primary' : 'secondary'}
          fullWidth
        />
        <Button
          onPress={() => setActiveTab('card')}
          label="Card"
          variant={activeTab !== 'account' ? 'primary' : 'secondary'}
          fullWidth
        />
      </View>
      {activeTab === 'account' ? <AccountTab /> : <CardTab />}
    </View>
  );
};

export default Index;
