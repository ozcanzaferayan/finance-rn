import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../constants/constants';
import { User } from '../types/User';

export const useUsers = () => {
  // 1. queryKey: Cache olarak tutacağı key
  // 2. queryFn: Datayı çekeceği fonksiyon
  // 3. staleTime: Cache süresini ms cinsinden tutar

  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetch(`${API_URL}/users`).then((r) => r.json()),
    staleTime: 1000 * 60, // 1dk cache süresi
  });
};
