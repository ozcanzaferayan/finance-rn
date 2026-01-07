import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '../constants/constants';
import { User } from '../types/User';

export const useAddUser = () => {
  // Cache'i temizlemek için use ile mevcut client'ı çekeriz
  // useRef gibi düşünün
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: Pick<User, 'name'>) => {
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      return await res.json();
    },
    // Tamamlandığında cache'i temizlemek için
    // Tekrar otomatik istek atar useUsers hook'u
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
