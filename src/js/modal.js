import { refs } from './refs';
import { getBookById } from './fetch';

const storageKey = 'shoppingList';

// Функция для отображения модального окна
export function showModal() {
  const elements = document.querySelectorAll(
    '.category__item, .best-book__item'
  );
  elements.forEach(element => {
    element.addEventListener('click', () => handleElementClick(element));
  });

  function handleElementClick(element) {
    clearModal();
    const elId = element.dataset.id;

    // Загружаем информацию о книге по её ID
    getBookById(elId)
      .then(resp => {
        updateModalContent(resp);
        updateShoppingButton(resp.title);
        openModal();
        document.addEventListener('keydown', onEscape);
      })
      .catch(error => {
        console.error('Error fetching book data:', error);
      });
  }

  function updateModalContent(bookData) {
    const { author, title, description, book_image, buy_links } = bookData;

    refs.modalAuthor.textContent = author;
    refs.modalTitle.textContent = title;
    refs.modalDescription.textContent = description;
    refs.modalImage.setAttribute('src', book_image);
    refs.modalLinkAmazon.setAttribute('href', buy_links[0].url);
    refs.modalLinkApple.setAttribute('href', buy_links[1].url);
    refs.modalLinkShop.setAttribute('href', buy_links[4].url);
  }

  function updateShoppingButton(title) {
    const shoppingList = JSON.parse(localStorage.getItem(storageKey)) || [];
    const bookIndex = shoppingList.findIndex(item => item.title === title);

    if (bookIndex === -1) {
      refs.modalButton.textContent = 'Add to shopping list';
      refs.modalUserInfo.textContent = '';
    } else {
      refs.modalButton.textContent = 'Remove from the shopping list';
      refs.modalUserInfo.textContent =
        'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
    }
  }

  function openModal() {
    refs.modalWindow.classList.remove('visually-hidden');
    refs.body.classList.add('locked');
    refs.modalWindow.addEventListener('click', backDropClick);
  }

  // Обработчик события при клике на кнопку закрытия модального окна
  refs.modalCloseBtn.addEventListener('click', closeModal);

  function closeModal() {
    refs.modalWindow.classList.add('visually-hidden');
    refs.body.classList.remove('locked');
    refs.modalWindow.removeEventListener('click', backDropClick);
  }

  function backDropClick(e) {
    if (e.target === refs.modalWindow) {
      closeModal();
    }
  }

  function onEscape(event) {
    if (event.code === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', onEscape);
    }
  }
}

// Очистка модального окна
function clearModal() {
  refs.modalAuthor.textContent = '';
  refs.modalTitle.textContent = '';
  refs.modalDescription.textContent = '';
  refs.modalImage.setAttribute('src', '');
  refs.modalLinkAmazon.setAttribute('href', '');
  refs.modalLinkApple.setAttribute('href', '');
  refs.modalLinkShop.setAttribute('href', '');
}

// Обработчик события при клике на кнопку добавления/удаления из списка покупок
refs.modalButton.addEventListener('click', buttonChange);

// Функция для добавления/удаления книги из списка покупок
function buttonChange() {
  const bookData = {
    author: refs.modalAuthor.textContent,
    title: refs.modalTitle.textContent,
    description: refs.modalDescription.textContent,
    book_image: refs.modalImage.getAttribute('src'),
    buy_links: [
      { url: refs.modalLinkAmazon.getAttribute('href') },
      { url: refs.modalLinkApple.getAttribute('href') },
      { url: refs.modalLinkShop.getAttribute('href') },
    ],
  };

  const shoppingList = JSON.parse(localStorage.getItem(storageKey)) || [];
  const bookIndex = shoppingList.findIndex(
    item => item.title === bookData.title
  );

  if (bookIndex === -1) {
    shoppingList.push(bookData);
    localStorage.setItem(storageKey, JSON.stringify(shoppingList));
    refs.modalButton.textContent = 'Remove from the shopping list';
    refs.modalUserInfo.textContent =
      'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
  } else {
    shoppingList.splice(bookIndex, 1);
    localStorage.setItem(storageKey, JSON.stringify(shoppingList));
    refs.modalButton.textContent = 'Add to shopping list';
    refs.modalUserInfo.textContent = '';
  }
}
