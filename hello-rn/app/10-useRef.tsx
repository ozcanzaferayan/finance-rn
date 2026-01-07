// rnfe
import React, { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

const Index = () => {
  // usss
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //usrfs
  const refEmail = useRef<TextInput>(null);
  const refPassword = useRef<TextInput>(null);

  return (
    <View>
      <TextInput
        ref={refEmail}
        value={email}
        onChangeText={setEmail}
        className="m-4 rounded border-2 p-4 text-2xl"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Email address"
        onSubmitEditing={() => refPassword.current?.focus()}
      />
      <TextInput
        ref={refPassword}
        value={password}
        onChangeText={setPassword}
        className="m-4 rounded border-2 p-4 text-2xl"
        secureTextEntry
        placeholder="Password"
      />
    </View>
  );
};

export default Index;
