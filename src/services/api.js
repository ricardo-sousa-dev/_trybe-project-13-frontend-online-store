// com base no código do grupo 7 da turma 12 (https://github.com/tryber/sd-12-project-frontend-online-store/pull/104/commits/d7e4374ee62eee76bbadb3a7ed51d3143b87331b)

export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await response.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const result = await response.json();
  return result;
}
