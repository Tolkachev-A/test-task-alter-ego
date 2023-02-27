import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchNews } from 'api';
import { setLoading } from 'store/slice/app';
import { InitialStateNewsType } from 'types';

export const getNews = createAsyncThunk(
  'new/fetchNews',
  async (page: number, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const { data } = await fetchNews(page);

      thunkAPI.dispatch(setLoading(false));

      return data;
    } catch (e) {
      console.log(e);
    }
  },
);

const initialState: InitialStateNewsType = {
  news: null,
};

export const slice = createSlice({
  name: 'new',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});
