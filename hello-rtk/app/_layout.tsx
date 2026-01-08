import { store } from '@/src/store/store';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {
    // Get data anddd
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
