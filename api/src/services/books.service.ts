import { mongooseDB } from "../db/mongoose";
import { IBook, IBookFilter, IBookPut } from "../interfaces/Book";

export const booksService = {
  async getBook(id: string): Promise<IBook | null> {
    try {
      const oneBook = await mongooseDB.getBook(id);
      return oneBook as IBook | null;
    } catch (error) {
      throw error;
    }
  },

  async getBooks(filter: IBookFilter): Promise<IBook[]> {
    try {
      const allBooks = await mongooseDB.getBooks(filter);
      return allBooks as IBook[];
    } catch (error) {
      throw error;
    }
  },

  async createBook(book: IBook): Promise<IBook> {
    try {
      const createdBook = await mongooseDB.createBook(book);
      return createdBook as IBook;
    } catch (error) {
      throw error;
    }
  },

  async updateBook(id: string, toUpdate: IBookPut): Promise<IBook> {
    try {
      const updatedBook = await mongooseDB.updateBook(id, toUpdate);
      return updatedBook as IBook;
    } catch (error) {
      throw error;
    }
  },

  async deleteBook(id: string): Promise<IBook> {
    try {
      const deletedBook = await mongooseDB.deleteBook(id);
      return deletedBook as IBook;
    } catch (error) {
      throw error;
    }
  },
};
