import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import wishListReducer from "../features/wishlist/wishListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    wishList: wishListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
