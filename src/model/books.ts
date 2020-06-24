export interface IBook {
  isbn: string;
  author: string;
  title: string;
}

interface IState {
  books: IBook[];
}

export let state = {
  books: [{
    isbn: "1",
    author: "Robin Wieruch",
    title: "The Road to React",
  }, {
    isbn: "2",
    author: "Kyle Simpson",
    title: "You Don't Know JS: Scope & Closures",
  }, {
    isbn: "3",
    author: "Andreas A. Antonopoulos",
    title: "Mastering Bitcoin",
  }],
} as IState;

export const searchBookByIsbn = (isbn: string): (IBook | undefined) =>
  state.books.filter((book) => book.isbn === isbn)[0];

export default state;
