import { strings } from '@/resources/strings';
import { Service } from '@/types';

export const mapServiceDataToFa = (category: string) => {
  return strings[category as keyof typeof strings] || category;
};

export const getServiceData = (services: Service[], dataKey: keyof Service) => {
  const result = services?.length
    ? new Set(services.map((s) => mapServiceDataToFa(s[dataKey])))
    : [];
  return [strings.all_options, ...result];
};
