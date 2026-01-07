// rnfe

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';

type FormValues = {
  email: string;
};

const Index = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    if (data.email === undefined) {
      setError("email", {
        type: 'custom',
        message: 'Lütfen email adresi giriniz',
      });
    }
  };

  return (
    <View>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="m-4 rounded border-2 p-4 text-2xl"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email Address"
          />
        )}
      />
      {errors.email && <Text className="mt-4 text-red-500">{errors.email?.message}</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Index;
