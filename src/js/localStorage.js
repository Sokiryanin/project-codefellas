export function addBook(bookData) {
  const storageKey = 'shopingList';
  let shoppingList = JSON.parse(localStorage.getItem(storageKey)) || [];

  const bookIndex = shoppingList.findIndex(
    item => item.title === bookData.title
  );

  if (bookIndex === -1) {
    shoppingList.push(bookData);
    localStorage.setItem(storageKey, JSON.stringify(shoppingList));
  }
}

export function removeFromShoppingList(bookTitle) {
  const storageKey = 'shoppingList';
  let shoppingList = JSON.parse(localStorage.getItem(storageKey)) || [];
  const bookIndex = shoppingList.findIndex(item => item.title === bookTitle);

  if (bookIndex !== -1) {
    shoppingList.splice(bookIndex, 1);
    localStorage.setItem(storageKey, JSON.stringify(shoppingList));
  }
}
