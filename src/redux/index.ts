import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart.slice';
import commonComponentReducer from './commonComponents';
import userReducer from './user.slice';

const appReducer = combineReducers({
  cart: cartReducer,
  commonComponents: commonComponentReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: {
    appReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
