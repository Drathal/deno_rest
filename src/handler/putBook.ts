import { state, searchBookByIsbn, IBook } from "../model/books.ts";

const putBook = async (
  { params, request, response }: {
    params: { isbn: string };
    request: any;
    response: any;
  },
) => {
  let book: IBook | undefined = searchBookByIsbn(params.isbn);
  if (book) {
    const body = await request.body();
    const updateInfos: { author?: string; title?: string } = body.value;
    book = { ...book, ...updateInfos };
    state.books = [
      ...state.books.filter((book) => book.isbn !== params.isbn),
      book,
    ];
    response.status = 200;
    response.body = { message: "OK" };
  } else {
    response.status = 404;
    response.body = { message: `Book not found` };
  }
};

export default putBook;
