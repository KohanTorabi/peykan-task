import { TextField, Grid, Autocomplete, Select, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { FiltersProps } from './types';
import { getServiceData } from './utils';
import { strings } from '@/resources/strings';
import { ServiceKeytype } from '@/types';

const CustomizedMenuIcon = styled(MenuIcon)`
  margin-left: 10px;
`;

export default function Filters({
  currentFilter,
  onFiltersChange,
  services,
}: FiltersProps) {
  return (
    <Grid container rowSpacing={4} marginTop={2}>
      <Grid item xs={12}>
        <TextField
          label={strings.service_name}
          variant="outlined"
          placeholder={strings.service_name_placeholder}
          fullWidth
          value={currentFilter.name}
        />
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12} lg={4}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={currentFilter.keytype}
            onChange={(e) =>
              onFiltersChange({
                ...currentFilter,
                keytype: e.target.value as ServiceKeytype,
              })
            }
            label={strings.service_status}>
            {[
              strings['all'],
              strings['easy-label'],
              strings['medium-label'],
              strings['hard-label'],
              strings['impossible-label'],
            ].map((v) => (
              <MenuItem key={v} value={10}>
                {strings[v as keyof typeof strings]}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Autocomplete
            options={getServiceData(services, 'category')}
            renderInput={(params) => (
              <TextField {...params} label={strings.service_category} />
            )}
            value={currentFilter.category}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Autocomplete
            options={[
              strings.priority_1,
              strings.priority_2,
              strings.priority_3,
            ]}
            renderInput={(params) => (
              <TextField {...params} label="اولویت سرویس ها" />
            )}
            value={currentFilter.priority}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
