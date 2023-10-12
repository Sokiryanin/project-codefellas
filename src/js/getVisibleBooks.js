export default function getVisibleBooks(page = 1, booksList) {
  if (booksList.length > 0) {
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;
    return booksList.slice(startIndex, endIndex);
  } else {
    return [];
  }
}
