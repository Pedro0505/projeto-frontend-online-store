export async function getCategories() {
  const DATA = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const RESPONSE = await DATA.json();
  return RESPONSE;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const DATA = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const RESPONSE = await DATA.json();
  return RESPONSE;
}
