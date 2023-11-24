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

const initialStates = {
  userData: {
    email: 'jdoe@example.com',
    firstname: 'Jane',
    lastname: 'Doe',
    addresses: [
      {
        defaultShipping: true,
        defaultBilling: true,
        firstname: 'Jane',
        lastname: 'Doe',
        region: {
          regionCode: 'NY',
          region: 'New York',
          regionId: 43,
        },
        postcode: 10755,
        street: ['123 Oak Ave'],
        city: 'Purchase',
        telephone: '512-555-1111',
        countryId: 'US',
      },
    ],
  },
  password: 'Password1',
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
