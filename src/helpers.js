const choice = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

const remove = (itemsArr, item) => {
  const idx = itemsArr.indexOf(item);
  itemsArr.splice(idx, 1);
  return itemsArr;
};
export { choice, remove };
