import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../redux';
import { login } from '../service/api.service';
import { setUserData } from '../redux/user.slice';
import { setLoading } from './setLoading';
import { setAppError } from './setAppError';

export type FormData = {
  username: string;
  password: string;
};

export const commonLogin = async (formData: FormData, callback: any) => {
  try {
    setLoading(true);

    const body = {
      username: formData.username,
      password: formData.password,
    };
    const resp = await login({ body });
    if (!resp) return;
    const { statusCode, message } = resp.data;
    if (statusCode === 200) {
      await AsyncStorage.setItem('userData', JSON.stringify(body));
      store.dispatch(setUserData(body));
      callback();
    }
    if (statusCode === 401) setAppError(statusCode, message);
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  } finally {
    setLoading(false);
  }
};
