// rnfe

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';
import { z } from 'zod';

type FormValues = {
  email: string;
};

const schema = z.object({
  email: z.email({ message: 'Email adresi hatalı' }),
});

const Index = () => {
  console.log('RENDERED');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    alert('Veriler gönderildi');
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
