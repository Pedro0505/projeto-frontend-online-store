export default async function getById(id) {
  const DATAID = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);
  const RESPONSEID = await DATAID.json();
  return RESPONSEID;
}
