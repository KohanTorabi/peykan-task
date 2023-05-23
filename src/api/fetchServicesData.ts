export async function fetchServicesData() {
  const res = await fetch('https://rtbf.ir/data/data.json');

  return res.json();
}
