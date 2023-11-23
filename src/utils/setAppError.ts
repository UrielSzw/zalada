import { store } from '../redux';
import { setAppErrorModal } from '../redux/commonComponents';

export const setAppError = (title?: string, message?: string, show = true) => {
  store.dispatch(setAppErrorModal({ show, title, message }));
};
