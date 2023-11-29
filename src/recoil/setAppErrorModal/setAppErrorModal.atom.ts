import { Resetter, atom, useRecoilValue, useResetRecoilState } from 'recoil';

export type ErrorModalState = {
  show: boolean;
  title?: string;
  message?: string;
};

export const setAppErrorModalState = atom<ErrorModalState>({
  key: 'setAppError',
  default: {
    show: false,
    title: '',
    message: '',
  },
});

export const useAppErrorModal = (): ErrorModalState => useRecoilValue(setAppErrorModalState);
export const useResetErrorModal = (): Resetter => useResetRecoilState(setAppErrorModalState);
