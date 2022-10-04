import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { wishListApi } from "./wishListApi";

export type wish = { id: number; title: string; author: string };
export type postWish = Omit<wish, "id">;

export interface CounterState {
  data: wish[];
  status: "idle" | "loading" | "failed";
  error: string | undefined;
  loading: boolean;
}

const initialState: CounterState = {
  data: [],
  status: "idle",
  error: undefined,
  loading: false,
};

export const wishListFetch = createAsyncThunk(
  "wishList/fetchWish",
  async (_, { rejectWithValue }) => {
    const response = await wishListApi.getWishList<wish[]>();

    if (response.status) {
      return rejectWithValue(response.err || "unknownError");
    }
    return response.body;
  }
);

export const wishListPost = createAsyncThunk(
  "wishList/postWish",
  async (wish: postWish, { rejectWithValue }) => {
    const response = await wishListApi.postWish<wish>(wish);
    // The value we return becomes the `fulfilled` action payload

    if (response.status) {
      return rejectWithValue(response.err || "unknownError");
    }
    return response.body;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(wishListFetch.fulfilled, (state, action) => {
        state.data = action.payload || [];
        state.status = "idle";
        state.loading = false;
      })
      .addCase(wishListPost.fulfilled, (state, action) => {
        if (action.payload) {
          state.data.push(action.payload);
        }

        state.status = "idle";
        state.loading = false;
      })
      .addMatcher(isLoading, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = "failed";
        state.loading = false;
      });
  },
});

export default counterSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

function isLoading(action: AnyAction) {
  return action.type.endsWith("pending");
}
