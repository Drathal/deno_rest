import { state, IBook } from "../model/books.ts";

const postBook = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const book: IBook = body.value;
  state.books.push(book);
  response.body = { message: "OK" };
  response.status = 200;
};

export default postBook;
