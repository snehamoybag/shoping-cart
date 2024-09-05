const getMatchingItems = (matchKey, matchValue, items = []) => {
  return items.filter((item) => item[matchKey] === matchValue);
};

export default getMatchingItems;
