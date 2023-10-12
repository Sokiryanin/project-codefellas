import Pagination from 'tui-pagination';
import { constants } from './constants';
import createMarkupEmptyPage from './createMarkupEmptyPage';
import createMarkupShoppingList from './createMarkupShoppingList';
import getVisibleBooks from './getVisibleBooks';
import { onScrollUp } from './scrollUp';
import svg from '../images/symbol-defs.svg';

const first = `<svg class="icon"><use href="${svg}#icon-paginatin-first"></use></svg>`;
const last = `<svg class="icon"><use href="${svg}#icon-paginatin-last"></use></svg>`;
const prev = `<svg class="icon"><use href="${svg}#icon-paginatin-prev"></use></svg>`;
const next = `<svg class="icon"><use href="${svg}#icon-paginatin-next"></use></svg>`;

const { SHOPPING_LIST_LOCAL_STOR, CURRENT_PAGE_SHOP_LIST } = constants;

const shoppingList = JSON.parse(localStorage.getItem(SHOPPING_LIST_LOCAL_STOR));
const currentPage = localStorage.getItem(CURRENT_PAGE_SHOP_LIST);

if (shoppingList?.length === 0 || !shoppingList) {
  createMarkupEmptyPage();
  return;
}

const options = {
  totalItems: shoppingList.length,
  itemsPerPage: 4,
  visiblePages: 1,
  page: currentPage ?? 1,
  centerAlign: false,

  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<button class="button page" type="button">{{page}}</button>',
    currentPage:
      '<button class="button page selected" type="button"><strong class="tui-page-btn tui-is-selected">{{page}}</strong></button>',
    moveButton({ type }) {
      if (type === 'first') {
        return (
          '<button class="button first arrow" type="button">' +
          first +
          '</button>'
        );
      } else if (type === 'last') {
        return (
          '<button class="button last arrow" type="button">' +
          last +
          '</button>'
        );
      } else if (type === 'prev') {
        return (
          '<button class="button prev arrow" type="button">' +
          prev +
          '</button>'
        );
      } else {
        return (
          '<button class="button next arrow" type="button">' +
          next +
          '</button>'
        );
      }
    },
    disabledMoveButton({ type }) {
      if (type === 'first') {
        return (
          '<button class="button first disabled arrow" type="button">' +
          first +
          '</button>'
        );
      } else if (type === 'last') {
        return (
          '<button class="button last disabled arrow" type="button">' +
          last +
          '</button>'
        );
      } else if (type === 'prev') {
        return (
          '<button class="button prev disabled arrow" type="button">' +
          prev +
          '</button>'
        );
      } else {
        return (
          '<button class="button next disabled arrow" type="button">' +
          next +
          '</button>'
        );
      }
    },
    moreButton:
      '<button class="button page tui-page-btn tui-{{type}}-is-ellip" type="button">...</button>',
  },
};

//////////////////////////////////////////////////////////////////////////

export default function createPagination() {
  return new Pagination('tui-pagination-container', options);
}

function handleResize() {
  const windowWidth = window.innerWidth;
  const currentPage = JSON.parse(localStorage.getItem(CURRENT_PAGE_SHOP_LIST));

  if (windowWidth >= 768) {
    options.visiblePages = 3;

    const pagination = createPagination();
    pagination.movePageTo(currentPage);
    paginationBeforeMove(pagination);
  } else {
    options.visiblePages = 1;

    const pagination = createPagination();
    pagination.movePageTo(currentPage);
    paginationBeforeMove(pagination);
  }
}

window.addEventListener('resize', handleResize);

handleResize();
///////////////////////////////////////////////////////////////////
const pagination = createPagination();
paginationBeforeMove(pagination);

function paginationBeforeMove(pagination) {
  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    const shoppingList = JSON.parse(
      localStorage.getItem(SHOPPING_LIST_LOCAL_STOR)
    );

    pagination.setTotalItems(shoppingList.length);

    const visibleBooks = getVisibleBooks(currentPage, shoppingList);
    createMarkupShoppingList(visibleBooks);
    onScrollUp();

    localStorage.setItem(CURRENT_PAGE_SHOP_LIST, JSON.stringify(currentPage));
  });
}

if (currentPage) {
  pagination.movePageTo(currentPage);
} else {
  JSON.stringify(
    localStorage.setItem(CURRENT_PAGE_SHOP_LIST, JSON.stringify(1))
  );

  const visibleBooks = getVisibleBooks(1, shoppingList);
  createMarkupShoppingList(visibleBooks);
}
