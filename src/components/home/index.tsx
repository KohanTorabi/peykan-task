'use client';

import { Container, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, ThemeProvider } from '@mui/material/styles';
import Filters from '../filters';
import { theme } from '@/config/theme';
import RTL from '../rtl';
import { strings } from '@/resources/strings';
import { useState } from 'react';
import { Filter } from '../filters/types';

const CustomizedMenuIcon = styled(MenuIcon)`
  margin-right: 10px;
`;

export default function Home() {
  const [filter, setFilter] = useState<Filter>({
    name: undefined,
    category: 'all',
    keytype: 'all',
    priority: 'all',
  });
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center">
            <CustomizedMenuIcon />
            {strings.title}
          </Typography>
          <div>
            <Filters currentFilter={filter} onFiltersChange={setFilter} />
          </div>
        </Container>
      </ThemeProvider>
    </RTL>
  );
}