import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Account and Card' }} />
      <Stack.Screen name="cards/[id]/index" options={{ title: 'Card', headerBackTitle: 'Cards' }} />
    </Stack>
  );
}
