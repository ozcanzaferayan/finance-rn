import { AuthProvider } from '@/src/contexts/AuthContext';
import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
