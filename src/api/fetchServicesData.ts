import { GetServicesUrl } from '@/constants/urls';
import { Service } from '@/types';

export async function fetchServicesData() {
  const res = await fetch(GetServicesUrl, {
    next: {
      revalidate: 60 * 30, // seconds
    },
  });

  const data = await res.json();

  // Filter services with the same name
  const filteredData = (data as Service[]).filter(
    (service, index, self) =>
      self.findIndex((s) => s.name === service.name) === index,
  );

  return filteredData;
}
