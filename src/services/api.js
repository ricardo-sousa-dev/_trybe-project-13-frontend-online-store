export async function getCategories() {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const result = await response.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/search?category=CATEGORY_ID&q=QUERY',
  );
  const result = await response.json();
  return result;
}
