import { getByCategory } from './fetch';
import { showModal } from './modal';
import { refs } from './refs';

const containerRef = refs.selectedCattegory;

export function onClickCategory(category) {
  getByCategory(category)
    .then(response => {
      renderCategory(getMarkCategory(response));
    })
    .catch(console.log);
}

function renderCategory(mark) {
  containerRef.innerHTML = mark;
  showModal();
}

function getMarkCategory(array) {
  const categoryName = markLastWord(array[0].list_name);
  const title = `<h2 class="category__title">${categoryName}</h2>`;

  const elements = array
    .map(book => {
      return `<li class="category__item" data-id="${book._id}">
      <div class="category__item-wrap">
        <div class="category__img-container">
        <img class="category__item-img" src="${book.book_image} "/>
        <p class="category__pop-up-text">
                    quick view 
                  </p>
        </div>
        <p class="category__item-title">${book.title}</p>
        <p class="category__item-author">${book.author}</p>
        </li>`;
    })
    .join('');
  const result = `<div class="select-category-cont">${title}<ul class="category__list">${elements}</ul></div>`;
  return result;
}

export function markLastWord(string) {
  const categoryName = string.split(' ');
  const quantityWord = categoryName.length;
  let categoryNameAddSpan = '';
  if (quantityWord > 1) {
    for (let i = 0; i <= quantityWord - 2; i += 1) {
      categoryNameAddSpan += ' ' + categoryName[i];
    }
    categoryNameAddSpan +=
      ' ' +
      `<span class=title__last-word>${categoryName[quantityWord - 1]}<span>`;
  } else {
    categoryNameAddSpan = `<span class=title__last-word>${categoryName[0]}<span>`;
  }
  return categoryNameAddSpan;
}
