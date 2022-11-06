import { Request, Response } from "express";
import { booksService } from "../services/books.service";
import { IBookFilter, IBookPut } from "../interfaces/Book";
import { Ok, Error, NotFound } from "../utils/httpResponses";

export const booksController = {
  async getBook(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const book = await booksService.getBook(id);

      if (book) {
        Ok(res, "Data retrieved successfully", book);
      } else {
        NotFound(res, "Book not found");
      }
    } catch (error: any) {
      Error(res, error.message ? error.message : "Get book error");
    }
  },

  async getBooks(req: Request, res: Response) {
    const filter: IBookFilter = req.body;

    if (!Object.entries(filter).length) {
      NotFound(res, "Define at least one filter in body to search");
    }
    try {
      const allBooks = await booksService.getBooks(filter);
      Ok(res, "Data retrieved successfully", allBooks);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Get books error");
    }
  },

  async createBook(req: Request, res: Response) {
    const {
      book_author,
      book_title,
      isbn,
      publisher,
      year_of_publication,
      image_url_l,
      image_url_m,
      image_url_s,
    } = req.body;

    if (
      !book_author ||
      !book_title ||
      !isbn ||
      !publisher ||
      !year_of_publication
    ) {
      NotFound(
        res,
        "Book author, book title, isbn, publisher, year are required"
      );
    }

    const newBook = {
      book_author,
      book_title,
      isbn,
      publisher,
      year_of_publication,
      image_url_l: image_url_l ? image_url_l : null,
      image_url_m: image_url_m ? image_url_m : null,
      image_url_s: image_url_s ? image_url_s : null,
    };

    try {
      const createdBook = await booksService.createBook(newBook);
      Ok(res, "Data retrieved successfully", createdBook);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Create book error");
    }
  },

  async updateBook(req: Request, res: Response) {
    const { id } = req.params;
    const toUpdate = req.body as IBookPut;

    if (!Object.entries(toUpdate).length) {
      NotFound(res, "Define at least one filter in body to update");
    }
    try {
      const currentBook = await booksService.getBook(id);
      if (!currentBook) {
        NotFound(res, "Book to update does not exist");
      }
      console.log(toUpdate);
      const updatedBook = await booksService.updateBook(id, toUpdate);
      Ok(res, "Data retrieved successfully", updatedBook);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Update book error");
    }
  },

  async deleteBook(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const currentBook = await booksService.getBook(id);
      if (!currentBook) {
        NotFound(res, "Book to delete does not exist");
      }
      const deletedBook = await booksService.deleteBook(id);
      Ok(res, "Data retrieved successfully", deletedBook);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Delete book error");
    }
  },
};
