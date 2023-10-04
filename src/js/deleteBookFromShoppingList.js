import { refs } from './refs';
import addBooksInShoppingList from './addBooksInShoppingList';

refs.booksInShoppingList.addEventListener('click', deleteBookFromShoppingList);

function deleteBookFromShoppingList(event) {
  if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'IMG') {
    const shoppingList = JSON.parse(
      window.localStorage.getItem('shoppingList')
    );

    const bookId = event.target.id;

    const newShoppingList = shoppingList.filter(book => book.id !== bookId);

    window.localStorage.setItem(
      'shoppingList',
      JSON.stringify(newShoppingList)
    );

    addBooksInShoppingList();
  }
}
