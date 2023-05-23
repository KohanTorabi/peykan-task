import { fetchServicesData } from '@/api/fetchServicesData';
import Home from '@/components/home';

export default async function HomePage() {
  const data = await fetchServicesData();

  return <Home services={data} />;
}
