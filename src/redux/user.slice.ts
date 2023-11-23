import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  userData: {
    userName: string;
    name?: string;
    email: string;
  };
};

const initialState: UserState = {
  userData: {
    userName: '',
    name: '',
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state: any, action: PayloadAction<any>) => {
      state.userData = action.payload;
    },
    resetUserData: (state: any) => {
      state.userData = initialState;
    },
  },
});

export const { setUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;
