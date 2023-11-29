import { setRecoil } from 'recoil-nexus';
import { spinnerState } from '../recoil/spinner/spinner.atom';

export const setLoading = (show: boolean) => {
  setRecoil(spinnerState, show);
};
