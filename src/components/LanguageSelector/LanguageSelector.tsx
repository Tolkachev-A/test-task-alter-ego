import React, { useState } from 'react';

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './language-selector.scss';

import usFlag from 'assets/svg/flag-us.svg';
import ukrFlag from 'assets/svg/ukraine-flag.svg';

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation('header');

  const [languagesFlag, setLanguagesFlag] = useState('uk');

  const flags = [
    { id: 1, countryFlag: ukrFlag, value: 'uk', name: 'Uk' },
    { id: 2, countryFlag: usFlag, value: 'en', name: 'En' },
  ];
  const handleChange = (e: SelectChangeEvent<string>) => {
    console.log(t);
    i18n.changeLanguage(e.target.value);
    setLanguagesFlag(e.target.value);
  };

  return (
    <div className="select-container">
      <FormControl>
        <Select
          id="languagesFlag"
          style={{ display: 'flex', border: 'none' }}
          value={languagesFlag}
          onChange={handleChange}
          IconComponent={() => null}
        >
          {flags.map(flag => (
            <MenuItem
              sx={{ display: 'flex', justifyContent: 'center' }}
              key={flag.id}
              value={flag.value}
            >
              <img width={40} height={40} src={flag.countryFlag} alt={flag.value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
