import React from 'react';

import { useTranslation } from 'react-i18next';

import 'App.scss';

const App = () => {
  const { t, i18n } = useTranslation('header');

  console.log(i18n);
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div onClick={() => handleChange('uk')}>{t('language.uk')}</div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div onClick={() => handleChange('en')}>{t('language.en')}</div>
      </header>
    </div>
  );
};

export default App;
