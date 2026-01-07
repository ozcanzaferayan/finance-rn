import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { User } from '../types/User';

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => api.get('/users').then((res) => res.data),
  });
};
