import { Service } from '@/types';
import { Filter } from '../filters/types';

/**
 * Filters an array of services based on the provided filter criteria.
 *
 * @param {Service[]} services - The array of services to be filtered.
 * @param {Filter} filter - The filter criteria to be applied.
 * @returns {Service[]} - An array of services that match the filter criteria.
 */
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
