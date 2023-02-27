import React, { ReactElement } from 'react';

import { Badge } from '@mui/material';
import './costum-badge.scss';

type CustomBadgeType = {
  variant: 'hot' | 'new';
  children: ReactElement;
};

export const CustomBadge = ({ children, variant }: CustomBadgeType) => {
  return (
    <Badge
      badgeContent={variant === 'hot' ? `HOT` : 'NEW'}
      color={variant === 'hot' ? `secondary` : 'success'}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      className="badge-container"
    >
      {children}
    </Badge>
  );
};
