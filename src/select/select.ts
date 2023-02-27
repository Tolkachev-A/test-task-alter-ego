import { RootState } from 'types';

export const selectNews = (state: RootState) => state.newsState.news;
