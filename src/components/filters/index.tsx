import { TextField, Grid, Autocomplete } from '@mui/material';
import { Filter, FiltersProps } from './types';
import { getServiceData } from './utils';
import { strings } from '@/resources/strings';

export default function Filters({
  currentFilter,
  onFiltersChange,
  services,
}: FiltersProps) {
  const changeFilter = (key: keyof Filter, value?: string) => {
    onFiltersChange({
      ...currentFilter,
      [key]: key === 'name' ? value : value || 'all',
    });
  };
  return (
    <Grid container rowSpacing={4} marginTop={2}>
      <Grid item xs={12}>
        <TextField
          label={strings.service_name}
          variant="outlined"
          placeholder={strings.service_name_placeholder}
          fullWidth
          value={currentFilter.name}
          onChange={(e) => changeFilter('name', e.target.value)}
          size="small"
        />
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12} lg={4}>
          <Autocomplete
            options={[
              'all',
              'easy-label',
              'medium-label',
              'hard-label',
              'impossible-label',
            ]}
            renderInput={(params) => (
              <TextField
                {...params}
                label={strings.service_status}
                size="small"
              />
            )}
            getOptionLabel={(v) => strings[v as keyof typeof strings]}
            value={currentFilter.keytype}
            onChange={(_e, v) => changeFilter('keytype', v || undefined)}
            size="small"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Autocomplete
            options={getServiceData(services, 'category')}
            renderInput={(params) => (
              <TextField
                {...params}
                label={strings.service_category}
                size="small"
              />
            )}
            getOptionLabel={(v) => strings[v as keyof typeof strings]}
            value={currentFilter.category}
            onChange={(_e, v) => changeFilter('category', v || undefined)}
            size="small"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Autocomplete
            options={['all', '1', '2', '3']}
            renderInput={(params) => (
              <TextField
                {...params}
                label={strings.service_priority}
                size="small"
              />
            )}
            getOptionLabel={(v) =>
              strings[`priority_${v}` as keyof typeof strings]
            }
            value={currentFilter.priority}
            onChange={(_e, v) => changeFilter('priority', v || undefined)}
            size="small"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
