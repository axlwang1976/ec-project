export const addToCartHelper = (items, itemToAdd) => {
  const existingItem = items.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return items.map(item =>
      item.id === itemToAdd.id ? { ...item, qty: item.qty + 1 } : item
    );
  }

  return [...items, { ...itemToAdd, qty: 1 }];
};
