import React from 'react';

import 'App.scss';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Header } from 'components/Header';
import { Path } from 'enums';
import { Home, News, NotFound, Profile } from 'pages';

const App = () => {
  return (
    <>
      <Header />
      <Container sx={{ padding: '50px' }}>
        <Routes>
          <Route path={Path.home} element={<Home />} />
          <Route path={Path.news} element={<News />} />
          <Route path={Path.news_id} element={<div>id</div>} />
          <Route path={Path.profile} element={<Profile />} />
          <Route path={Path.note_found} element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
