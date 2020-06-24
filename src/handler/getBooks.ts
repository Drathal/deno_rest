import { state } from "../model/books.ts";

const getBooks = ({ response }: { response: any }) => {
  response.body = state.books;
};

export default getBooks;
