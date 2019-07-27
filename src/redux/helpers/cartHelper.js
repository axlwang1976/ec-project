export const addToCartHelper = (items, itemToAdd) => {
  const existingItem = items.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return items.map(item =>
      item.id === itemToAdd.id ? { ...item, qty: item.qty + 1 } : item
    );
  }

  return [...items, { ...itemToAdd, qty: 1 }];
};

export const decQtyHelper = (items, itemToRemove) => {
  const existingItem = items.find(item => item.id === itemToRemove.id);

  if (existingItem.qty === 1) {
    return items.filter(item => item.id !== itemToRemove.id);
  }

  return items.map(item =>
    item.id === itemToRemove.id ? { ...item, qty: item.qty - 1 } : item
  );
};
