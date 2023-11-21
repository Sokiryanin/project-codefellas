import { refs } from './refs';
import { constants } from './constants';
import createMarkupEmptyPage from './createMarkupEmptyPage';
import createMarkupShoppingList from './createMarkupShoppingList';
import getVisibleBooks from './getVisibleBooks';
import createPagination from './pagination';

const { SHOPPING_LIST_LOCAL_STOR, CURRENT_PAGE_SHOP_LIST } = constants;

refs.booksInShoppingList.addEventListener('click', deleteBookFromShoppingList);

function deleteBookFromShoppingList(event) {
  if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'IMG') {
    const shoppingList = JSON.parse(
      localStorage.getItem(SHOPPING_LIST_LOCAL_STOR)
    );

    const bookId = event.target.id;

    const newShoppingList = shoppingList.filter(book => book.id !== bookId);

    localStorage.setItem(
      SHOPPING_LIST_LOCAL_STOR,
      JSON.stringify(newShoppingList)
    );

    ////////////////////////////////////////
    const currentPage = JSON.parse(
      localStorage.getItem(CURRENT_PAGE_SHOP_LIST)
    );
    const numbersCount = Math.ceil(newShoppingList.length / 4);

    if (currentPage > numbersCount && newShoppingList.length === 0) {
      refs.booksInShoppingList.innerHTML = '';
      refs.tuPagination.innerHTML = '';
      createMarkupEmptyPage();
      localStorage.removeItem(CURRENT_PAGE_SHOP_LIST);
      //------------------------------------------------
    } else if (currentPage > numbersCount && newShoppingList.length > 0) {
      const pagination = createPagination();
      pagination.setTotalItems(newShoppingList.length);
      localStorage.setItem(CURRENT_PAGE_SHOP_LIST, currentPage - 1);
      pagination.movePageTo(currentPage - 1);
      paginationBeforeMove(pagination, newShoppingList);

      const visibleBooks = getVisibleBooks(currentPage - 1, newShoppingList);
      createMarkupShoppingList(visibleBooks);
      //-------------------------------------------------
    } else {
      const pagination = createPagination();
      pagination.setTotalItems(newShoppingList.length);
      pagination.movePageTo(currentPage);
      paginationBeforeMove(pagination, newShoppingList);

      const visibleBooks = getVisibleBooks(currentPage, newShoppingList);
      createMarkupShoppingList(visibleBooks);
    }
  }
}

function paginationBeforeMove(pagination, shoppingList) {
  pagination.on('beforeMove', event => {
    const currentPage = event.page;

    pagination.setTotalItems(shoppingList.length);

    const visibleBooks = getVisibleBooks(currentPage, shoppingList);
    createMarkupShoppingList(visibleBooks);

    localStorage.setItem(CURRENT_PAGE_SHOP_LIST, JSON.stringify(currentPage));
  });
}
