import { searchBookByIsbn, IBook } from "../model/books.ts";

const getBook = (
  { params, response }: { params: { isbn: string }; response: any },
) => {
  const book: IBook | undefined = searchBookByIsbn(params.isbn);
  if (book) {
    response.status = 200;
    response.body = book;
  } else {
    response.status = 404;
    response.body = { message: `Book not found.` };
  }
};

export default getBook;
