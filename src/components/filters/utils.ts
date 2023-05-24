import { Service } from '@/types';

/**
 * Retrieves unique values of a specific data key from an array of services.
 *
 * @param {Service[]} services - The array of services.
 * @param {keyof Service} dataKey - The key of the data to be retrieved.
 * @returns {string[]} - An array of unique values of the specified data key, including 'all'.
 */
export const getServiceData = (services: Service[], dataKey: keyof Service) => {
  const result = services?.length
    ? new Set(services.map((s) => s[dataKey]))
    : [];
  return ['all', ...result].filter((v) => (v || '')?.length !== 0);
};
