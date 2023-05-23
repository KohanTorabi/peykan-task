import { Service, ServiceKeytype, ServicePriority } from '@/types';

export interface Filter {
  name?: string;
  keytype: 'all' | ServiceKeytype;
  category: 'all' | string;
  priority: 'all' | ServicePriority;
}

export interface FiltersProps {
  onFiltersChange: (newFilter: Filter) => void;
  services: Service[];
  currentFilter: Filter;
}
