import React, { useEffect, useMemo } from 'react';

import { Grid } from '@mui/material';

import { CustomBadge } from 'components/CustomBadge';
import { New } from 'components/New';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getNews } from 'store/slice/news';

// eslint-disable-next-line no-magic-numbers
const arr = [1, 2, 3, 4, 5];

export const News = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(store => store.appState.iaLoading);
  // const isLoading = useAppSelector(selectNews);

  console.log(process.env.REACT_APP_BASE_URL);
  useEffect(() => {
    dispatch(getNews(1));
  }, []);

  const a = useMemo(() => {
    return arr.map(s => {
      if (s === 1) {
        return (
          <Grid xs={12} sm={6} md={4} item key={s}>
            <CustomBadge variant="new">
              <New />
            </CustomBadge>
          </Grid>
        );
      }
      // eslint-disable-next-line no-magic-numbers
      if (s === 2) {
        return (
          <Grid xs={12} sm={6} md={4} item key={s}>
            <CustomBadge key={s} variant="hot">
              <New />
            </CustomBadge>
          </Grid>
        );
      }

      return (
        <Grid xs={12} sm={6} md={4} item key={s}>
          <New key={s} />
        </Grid>
      );
    });
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <Grid container spacing={4}>
      {a}
    </Grid>
  );
};
