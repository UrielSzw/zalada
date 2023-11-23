import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ErrorModalState = {
  show: boolean;
  title?: string;
  message?: string;
};

export type commonComponentsState = {
  showSpinner: boolean;
  errorModal: ErrorModalState;
};

const initialState: commonComponentsState = {
  showSpinner: false,
  errorModal: {
    show: false,
    title: '',
    message: '',
  },
};

const commonComponents = createSlice({
  name: 'commonComponents',
  initialState,
  reducers: {
    setShowSpinner: (state, action: PayloadAction<boolean>) => {
      state.showSpinner = action.payload;
    },
    setAppErrorModal: (state, action: PayloadAction<ErrorModalState>) => {
      const { title = '', message = '' } = action.payload;
      state.errorModal.show = action.payload.show;
      state.errorModal.title = title;
      state.errorModal.message = message;
    },
    hideErrorModal: (state) => {
      state.errorModal.show = false;
    },
    resetCommonComponents: (state) => {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      state.showSpinner = initialState.showSpinner;
      state.errorModal = initialState.errorModal;
    },
  },
});

export const { setShowSpinner, setAppErrorModal, resetCommonComponents, hideErrorModal } =
  commonComponents.actions;

export default commonComponents.reducer;
