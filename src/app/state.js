export function useCategory() {
  let category = "";

  function getCategory() {
    return category;
  }

  function setCategory(newCategory) {
    category = newCategory;
  }
  return [getCategory, setCategory];
}

export function useSearch(value) {
  let searchValue = value;

  function getSearch() {
    return searchValue;
  }

  function setSearch(newValue) {
    searchValue = newValue;
  }

  return [getSearch, setSearch];
}
