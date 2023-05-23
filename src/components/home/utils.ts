import { Service } from '@/types';
import { Filter } from '../filters/types';

export function filterServices(services: Service[], filter: Filter): Service[] {
  return (
    services?.filter((s) => {
      const isNameMatched = !filter.name || s.name.includes(filter.name);
      const isCategoryMatched =
        filter.category === 'all' || s.category === filter.category;
      const isKeytypeMatched =
        filter.keytype === 'all' || s.keytype === filter.keytype;
      const isPriorityMatched =
        filter.priority === 'all' || s.priority === filter.priority;

      return (
        isNameMatched &&
        isCategoryMatched &&
        isKeytypeMatched &&
        isPriorityMatched
      );
    }) || []
  );
}
