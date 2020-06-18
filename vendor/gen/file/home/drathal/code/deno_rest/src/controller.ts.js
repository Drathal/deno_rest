let books = [{
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
    }];
const searchBookByIsbn = (isbn) => books.filter((book) => book.isbn === isbn)[0];
const getBooks = ({ response }) => {
    response.body = books;
};
const getBook = ({ params, response }) => {
    const book = searchBookByIsbn(params.isbn);
    if (book) {
        response.status = 200;
        response.body = book;
    }
    else {
        response.status = 404;
        response.body = { message: `Book not found.` };
    }
};
const addBook = async ({ request, response }) => {
    const body = await request.body();
    const book = body.value;
    books.push(book);
    response.body = { message: "OK" };
    response.status = 200;
};
const updateBook = async ({ params, request, response }) => {
    let book = searchBookByIsbn(params.isbn);
    if (book) {
        const body = await request.body();
        const updateInfos = body.value;
        book = { ...book, ...updateInfos };
        books = [...books.filter((book) => book.isbn !== params.isbn), book];
        response.status = 200;
        response.body = { message: "OK" };
    }
    else {
        response.status = 404;
        response.body = { message: `Book not found` };
    }
};
const deleteBook = ({ params, response }) => {
    books = books.filter((book) => book.isbn !== params.isbn);
    response.body = { message: "OK" };
    response.status = 200;
};
export { getBooks, getBook, addBook, updateBook, deleteBook };
//# sourceMappingURL=file:///home/drathal/code/deno_rest/vendor/gen/file/home/drathal/code/deno_rest/src/controller.ts.js.map