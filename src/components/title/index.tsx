'use client';

import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { strings } from '@/resources/strings';
import { memo } from 'react';

const TitleIcon = styled(MenuIcon)`
  margin-right: 10px;
  vertical-align: bottom;
`;

const HomeTitle = memo(function HomeTitle() {
  return (
    <Typography variant="h4" align="center" fontSize="1.5em">
      <TitleIcon />
      {strings.title}
    </Typography>
  );
});
export default HomeTitle;
