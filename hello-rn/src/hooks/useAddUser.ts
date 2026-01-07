import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/api';
import { User } from '../types/User';

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: Pick<User, 'name'>) => {
      return await api.post('/users', user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
