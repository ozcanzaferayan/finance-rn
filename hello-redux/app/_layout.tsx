import store from '@/src/store/store';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import '../global.css';

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
