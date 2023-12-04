import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ErrorModalState = {
  show: boolean;
  title?: string;
  message?: string;
};

export type commonComponentsState = {
  showSpinner: number;
  errorModal: ErrorModalState;
};

const initialState: commonComponentsState = {
  showSpinner: 0,
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
      // When showSpinner is grater than 0, the Spinner component will be rendered
      state.showSpinner = action.payload ? state.showSpinner + 1 : state.showSpinner - 1;
      console.log(state.showSpinner);
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
