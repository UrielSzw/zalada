import { atom, useRecoilValue } from 'recoil';

export type SpinnerStateType = boolean;

export const spinnerState = atom<SpinnerStateType>({
  key: 'spinner',
  default: false,
});

export const useShowSpinner = (): SpinnerStateType => useRecoilValue(spinnerState);
