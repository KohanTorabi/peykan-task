import { Service } from '@/types';

export const getServiceData = (services: Service[], dataKey: keyof Service) => {
  const result = services?.length
    ? new Set(services.map((s) => s[dataKey]))
    : [];
  return ['all', ...result].filter((v) => (v || '')?.length !== 0);
};
