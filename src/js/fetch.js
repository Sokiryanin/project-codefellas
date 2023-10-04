import axios from 'axios';

const categoriesAll = 'https://books-backend.p.goit.global/books/category-list';
const topBooks = 'https://books-backend.p.goit.global/books/top-books';
const getCategory =
  'https://books-backend.p.goit.global/books/category?category=';
const bookInfo = 'https://books-backend.p.goit.global/books/';

// return all categories
export function getAllCategories() {
  return axios.get(categoriesAll).then(response => {
    return response.data;
  });
}

// return top books
export function getTopBooks() {
  return axios.get(topBooks).then(response => {
    return response.data;
  });
}

// return choose category
export function getByCategory(category) {
  return axios.get(`${getCategory}${category}`).then(response => {
    return response.data;
  });
}

// return bool by id
export function getBookById(id) {
  return axios.get(`${bookInfo}${id}`).then(response => {
    return response.data;
  });
}
