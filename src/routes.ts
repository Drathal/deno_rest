import { Router } from "https://deno.land/x/oak/mod.ts";
import { getBook, getBooks, postBook, putBook, deleteBook } from "./handler/index.ts";

const router = new Router();
router
  .get("/api/v1/books", getBooks)
  .get("/api/v1/books/:isbn", getBook)
  .post("/api/v1/books", postBook)
  .put("/api/v1/books/:isbn", putBook)
  .delete("/api/v1/books/:isbn", deleteBook);

export default router;
