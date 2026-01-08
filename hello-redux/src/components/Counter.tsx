import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { decrement, increment, incrementByValue } from '../actions/counterActions';

const Counter = () => {
  // @ts-ignore
  const count = useSelector((state) => state.counter.value);
  // @ts-ignore
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="By Value" onPress={() => dispatch(incrementByValue(5))} />
      <Button title="Login" onPress={() => dispatch(login('blabla'))} />
      <Text className="text-6xl">{count}</Text>
      <Text className="text-6xl">{token}</Text>
    </View>
  );
};

export default Counter;
