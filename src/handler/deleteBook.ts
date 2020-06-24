import { state } from "../model/books.ts";

const deleteBook = (
  { params, response }: { params: { isbn: string }; response: any },
) => {
  state.books = state.books.filter((book) => book.isbn !== params.isbn);
  response.body = { message: "OK" };
  response.status = 200;
};

export default deleteBook;
