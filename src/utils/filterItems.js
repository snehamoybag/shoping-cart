const filterItems = (filterKey, filterValue, items = []) => {
  return items.filter((item) => item[filterKey] !== filterValue);
};

export default filterItems;
