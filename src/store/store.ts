import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/slice/app';
import { newsReducer } from 'store/slice/news';

export const store = configureStore({
  reducer: { newsState: newsReducer, appState: appReducer },
});
