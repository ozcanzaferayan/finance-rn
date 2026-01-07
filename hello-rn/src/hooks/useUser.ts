import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { User } from '../types/User';

export const useUser = (id: string) => {
  return useQuery<User>({
    queryKey: ['users', id],
    queryFn: () => api.get(`/users/${id}`).then((res) => res.data),
  });
};
