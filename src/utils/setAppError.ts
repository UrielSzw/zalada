import { setRecoil } from 'recoil-nexus';
import { setAppErrorModalState } from '../recoil/setAppErrorModal/setAppErrorModal.atom';

export const setAppError = (title?: string, message?: string, show = true) => {
  setRecoil(setAppErrorModalState, { show, title, message });
};
