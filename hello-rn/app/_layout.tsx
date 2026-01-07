import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../global.css';

import { Stack } from 'expo-router';

const queryClient = new QueryClient({
  
});

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Anasayfa', headerShown: true }} />
      </Stack>
    </QueryClientProvider>
  );
}
