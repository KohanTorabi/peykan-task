'use client';

import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Filters from '../filters';
import { theme } from '@/config/theme';
import RTL from '../rtl';
import { useState } from 'react';
import { Filter } from '../filters/types';
import { Service } from '@/types';
import HomeTitle from '../title';
import ServiceCards from '../cards';
import { useMemo } from 'react';
import { filterServices } from './utils';
import HomeBanner from '../banner';

export default function Home({ services }: { services: Service[] }) {
  const [filter, setFilter] = useState<Filter>({
    name: undefined,
    category: 'all',
    keytype: 'all',
    priority: 'all',
  });

  const filteredServices = useMemo(() => {
    return filterServices(services, filter);
  }, [services, filter]);

  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <HomeBanner />
        <Container maxWidth="lg">
          <HomeTitle />
          <Filters
            currentFilter={filter}
            onFiltersChange={setFilter}
            services={services}
          />
          <ServiceCards services={filteredServices} />
        </Container>
      </ThemeProvider>
    </RTL>
  );
}
