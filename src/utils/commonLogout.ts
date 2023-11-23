import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../redux';
import { resetUserData } from '../redux/user.slice';
import { setAppError } from './setAppError';

export const commonLogout = async () => {
  try {
    store.dispatch(resetUserData());
    AsyncStorage.removeItem('userData');
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  }
};
