import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../redux';
import { register } from '../service/api.service';
import { setLoading } from './setLoading';
import { setUserData } from '../redux/user.slice';
import { setAppError } from './setAppError';

type FormData = {
  userName: string;
  password: string;
  email: string;
};

export const commonRegister = async (formData: FormData, callback: any) => {
  try {
    setLoading(true);
    const body = {
      userName: formData.userName,
      password: formData.password,
      email: formData.email,
    };
    const resp = await register({ body });
    if (!resp) return;
    const { statusCode, message, data } = resp.data;
    if (statusCode === 201) {
      await AsyncStorage.setItem('userData', JSON.stringify(body));
      store.dispatch(setUserData(data));
      callback();
    }
    if (statusCode === 400) setAppError(statusCode, message);
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  } finally {
    setLoading(false);
  }
};
