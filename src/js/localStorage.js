export { constants } from './constants';

const { SHOPPING_LIST_LOCAL_STOR } = constants;

export function addBook(bookData) {
  let shoppingList =
    JSON.parse(localStorage.getItem(SHOPPING_LIST_LOCAL_STOR)) || [];

  const bookIndex = shoppingList.findIndex(
    item => item.title === bookData.title
  );

  if (bookIndex === -1) {
    shoppingList.push(bookData);
    localStorage.setItem(
      SHOPPING_LIST_LOCAL_STOR,
      JSON.stringify(shoppingList)
    );
  }
}

export function removeFromShoppingList(bookTitle) {
  let shoppingList =
    JSON.parse(localStorage.getItem(SHOPPING_LIST_LOCAL_STOR)) || [];
  const bookIndex = shoppingList.findIndex(item => item.title === bookTitle);

  if (bookIndex !== -1) {
    shoppingList.splice(bookIndex, 1);
    localStorage.setItem(
      SHOPPING_LIST_LOCAL_STOR,
      JSON.stringify(shoppingList)
    );
  }
}
