import Grid from '@mui/material/Grid';
import { ServiceCardsProps } from './types';
import ServiceCard from './card';

export default function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <Grid container spacing={2} paddingY={8}>
      {services?.map((s) => (
        <Grid item key={s.name} xs={12} md={6} lg={3}>
          <ServiceCard data={s} />
        </Grid>
      ))}
    </Grid>
  );
}
