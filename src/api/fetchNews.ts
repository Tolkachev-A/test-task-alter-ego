import { AxiosResponse } from 'axios';

import { instance } from 'api/config';
import { NewType } from 'types';

export const fetchNews = (page: number) =>
  instance.get<number, AxiosResponse<NewType[]>>(`posts?_page=${page}&_limit=10`);
