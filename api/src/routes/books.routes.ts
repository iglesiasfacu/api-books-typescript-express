import express from "express";
const router = express.Router();
import { booksController } from "../controllers/books.controller";

router
  .get("/books/:id", booksController.getBook)
  .get("/books", booksController.getBooks)
  .post("/books", booksController.createBook)
  .put("/books/:id", booksController.updateBook)
  .delete("/books/:id", booksController.deleteBook);

export default router;
