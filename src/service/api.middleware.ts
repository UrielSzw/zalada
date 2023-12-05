import { setAppError, setLoading } from '../utils';

export const apiDispatch = async (apiFn: any, ...args: any) => {
  try {
    setLoading(true);
    const response = await apiFn(...args);

    if (response) {
      return response.data || response;
    }
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  } finally {
    setLoading(false);
  }
};
