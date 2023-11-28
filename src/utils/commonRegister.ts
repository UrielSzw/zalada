import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../redux';
import { register } from '../service/api.service';
import { setLoading } from './setLoading';
import { setUserData } from '../redux/user.slice';
import { setAppError } from './setAppError';

type FormData = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  postCode: string;
  region: string;
  street: string;
  telephone: string;
};

export const commonRegister = async (formData: FormData, callback: any) => {
  try {
    setLoading(true);
    const body = {
      customer: {
        email: formData.email,
        firstname: formData.firstName,
        lastname: formData.lastName,
        addresses: [
          {
            defaultShipping: true,
            defaultBilling: true,
            firstname: formData.firstName,
            lastname: formData.lastName,
            region: {
              regionCode: 'NY',
              region: formData.region,
              regionId: 43,
            },
            postcode: formData.postCode,
            street: [formData.street],
            city: 'Purchase',
            telephone: formData.telephone,
            countryId: 'US',
          },
        ],
      },

      password: formData.password,
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
