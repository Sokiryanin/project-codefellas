import { getTopBooks } from './fetch';
import { showModal } from './modal';
import { refs } from './refs';
import { markLastWord, onClickCategory } from './selectedCategory';

function renderBooks(mark) {
  refs.selectedCattegory.innerHTML = mark;
  showModal();
}

function renderBookCard(book) {
  const { list_name, books } = book;

  const title = `<h3 class="best-category__item-title">${list_name}</h3>`;
  const elements = books
    .map(book => {
      return ` <li class="best-book__item" data-id="${book._id}">
      <div class="best-book__wrap">
    <div class="best-book__img-container">
      <img class="best-book__img" src="${book.book_image}" alt="${book.title}"/>
      <p class="book__pop-up-text">
                quick view 
              </p>
              </div>
      <h3 class="best-book__title">${book.title}</h3>
      <p class="best-book__author">${book.author}</p>
      </div>
    </li>
    `;
    })
    .join('');

  const seeMoreButton = `<button class="seemore__btn" type="button" data-id="${list_name}">See more</button>`;
  const result = `<li class="best-category__item">${title}<ul class="best-book__list">${elements}</ul>${seeMoreButton}</li>`;
  return result;
}
renderCategory();

export function renderCategory() {
  getTopBooks()
    .then(response => {
      const markup = `<div class=" best-category__container"><h2 class="best-category__title title-category__list">
        ${markLastWord(
          'Best Sellers Books'
        )}</h2><ul class="best-category__list">${response
        .map(renderBookCard)
        .join('')}</ul></div>`;
      renderBooks(markup);
    })
    .catch(error => {
      console.log('Помилка при отриманні даних з сервера:', error);
    });
}

refs.selectedCattegory.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    onClickCategory(event.target.dataset.id);
  }
});
