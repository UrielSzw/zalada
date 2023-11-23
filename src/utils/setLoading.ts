import { store } from '../redux';
import { setShowSpinner } from '../redux/commonComponents';

export const setLoading = (show: boolean) => {
  store.dispatch(setShowSpinner(show));
};
