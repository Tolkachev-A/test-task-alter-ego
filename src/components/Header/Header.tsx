import React, { useMemo, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import logo from 'assets/img/logo.png';
import { LanguageSelector } from 'components/LanguageSelector';
import { NAME_PAGES } from 'consts';
import { Path } from 'enums';

import './header.scss';

const settings = ['Вийти'];

export const Header = () => {
  const { t } = useTranslation('header');

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const appbar = useMemo(() => {
    return (
      <>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {NAME_PAGES.map(page => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
          }}
        >
          <img width={100} src={logo} alt="logo" />
        </Box>
      </>
    );
  }, [anchorElNav]);

  return (
    <AppBar position="static" className="header-container">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img width={100} src={logo} alt="logo" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {NAME_PAGES.map(page => (
              <NavLink key={page} to={Path[page]} className="btn">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {t(`pages.${page}`)}
                </Button>
              </NavLink>
            ))}
          </Box>
          {appbar}
          <Box
            sx={{
              flexGrow: 0,
              justifyContent: 'center',

              xs: { width: '80px' },
            }}
          >
            <LanguageSelector />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={t('tooltip-title')}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
