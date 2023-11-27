import { atom, useSetRecoilState } from 'recoil';

export type SpinnerStateType = boolean;

export const spinnerState = atom<SpinnerStateType>({
  key: 'spinner',
  default: false,
});

export const SetSpinnerState = () => useSetRecoilState(spinnerState);
