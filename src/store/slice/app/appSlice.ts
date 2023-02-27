import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateAppType, Nullable } from 'types';

const initialState: InitialStateAppType = {
  initializeApp: false,
  iaLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitializeApp(state, action: PayloadAction<boolean>) {
      state.initializeApp = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.iaLoading = action.payload;
    },
    setError(state, action: PayloadAction<Nullable<string>>) {
      state.error = action.payload;
    },
  },
});
