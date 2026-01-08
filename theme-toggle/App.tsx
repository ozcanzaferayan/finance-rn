import { StatusBar } from 'expo-status-bar';
import './global.css';
import { View, Text } from 'react-native';
import ThemeToggle from 'components/ThemeToggle';
import { ThemeProvider } from 'providers/ThemeProvider';

const AppContent = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-text text-2xl font-bold mb-4">Hello Toggle</Text>
      <ThemeToggle />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
