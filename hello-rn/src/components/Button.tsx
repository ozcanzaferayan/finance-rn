// rnfe
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
};

const Button = ({ title = 'Default', variant = 'primary' }: Props) => {
  let className = '';

  switch (variant) {
    case 'primary':
      className = 'm-4 rounded-lg bg-blue-500 p-4';
      break;
    case 'secondary':
      className = 'm-4 rounded-lg bg-gray-500 p-4';
      break;
    case 'success':
      className = 'm-4 rounded-lg bg-green-500 p-4';
      break;
    case 'danger':
      className = 'm-4 rounded-lg bg-red-500 p-4';
      break;
    case 'warning':
      className = 'm-4 rounded-lg bg-orange-500 p-4';
      break;
    default:
      className = 'm-4 rounded-lg bg-blue-500 p-4';
      break;
  }

  return (
    <TouchableOpacity className={'m-4 rounded-lg bg-orange-500 p-4'}>
      <Text className="text-center text-2xl font-semibold text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
