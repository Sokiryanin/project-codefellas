import axios from 'axios';
import { refs } from './refs';
import amazon from '../images/amazon.png';
import appleBooks from '../images/appleshop.png';
import svg from '../images/icon-trash.svg';

export default function createMarkupShoppingList(visibleBooks) {
  const booksList = refs.booksInShoppingList;

  const markup = visibleBooks
    .map(
      ({
        id,
        author,
        title,
        book_image: image,
        description,
        category,
        buy_links: links,
      }) => {
        return ` 
      <li class="books-card" id=${id}>
        <img
          class="books-card__image"
          src=${image}
          alt="book image"
        />

        <div class="books-card__info">
          <h2 class="books-card__title">${title}</h2>
          <p class="books-card__category">${category}</p>
          <div class="books-card__description">
            <p class="books-card__description-text">${description}</p>
          </div>
          

          <div class="wrapper">
            <p class="books-card__author">${author}</p>
            <div class="wrapper-links">
              <a href=${links[0].url} target="_blank" class="books-card__link">
                <div class="books-card__image-amazon"></div>
              </a>

              <a href=${links[1].url} target="_blank" class="books-card__link">
                <img src=${appleBooks} alt="Apple books" class="books-card__image-appleBooks" />
              </a>
            </div>
          </div>
        </div>
        <button type="button" class="button__delete" id=${id}>
          <img class="button__icon" alt="icon delete" src=${svg} id=${id}></img>
        </button>
      </li>
    `;
      }
    )
    .join('');

  booksList.innerHTML = markup;
}
