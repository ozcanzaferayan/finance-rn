import { useAddUserMutation, useGetUsersQuery } from '@/src/api/api';
import { decrement, increment, incrementByValue } from '@/src/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/src/store/store';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';

const Index = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data: users } = useGetUsersQuery();
  const [addUser, { isLoading }] = useAddUserMutation();

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="By Value" onPress={() => dispatch(incrementByValue({ value: 5 }))} />
      <Button title="Add user" onPress={() => addUser({ name: 'DefineX' })} />
      <Text className="text-6xl">{count}</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({ item: user }) => <Text className="text-6xl">{user.name}</Text>}
      />
    </View>
  );
};

export default Index;
