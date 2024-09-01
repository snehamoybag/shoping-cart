const getItemById = (queryId, itemsList = []) => {
  return itemsList.find((currentItem) => currentItem.id === queryId);
};

export default getItemById;
