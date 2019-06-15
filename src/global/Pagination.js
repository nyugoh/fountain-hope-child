/*
 * Used to generate pagination pages
 */
export const getPages = (total, uri) => {
  var pages;
  var perPage = 5;
  pages = total / perPage;
  total % perPage > 0 ? pages++ : "";
  var url = [];
  for (let i = 1; i <= pages; i++) url[i - 1] = `${uri}?page=${i}`;
  return url;
};
