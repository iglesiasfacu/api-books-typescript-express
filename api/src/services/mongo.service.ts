import { indexDirname } from "../index";
import { convertCsvToJson } from "../utils/csvToJson";
import { mongooseDB } from "../db/mongoose";
import { IBook } from "../interfaces/Book";
import { IRating } from "../interfaces/Rating";
import { IUser } from "../interfaces/User";

export const mongoService = {
  async initBooks(): Promise<boolean> {
    try {
      const booksFromCSV: IBook[] = await convertCsvToJson(
        `${indexDirname}/archives/books.csv`,
        true
      );

      return mongooseDB.initBooks(booksFromCSV);
    } catch (error) {
      throw error;
    }
  },

  async initRatings(): Promise<boolean> {
    try {
      const ratingsFromCSV: IRating[] = await convertCsvToJson(
        `${indexDirname}/archives/ratings.csv`,
        false
      );

      return mongooseDB.initRatings(ratingsFromCSV);
    } catch (error) {
      throw error;
    }
  },

  async initUsers(): Promise<boolean> {
    try {
      const usersFromCSV: IUser[] = await convertCsvToJson(
        `${indexDirname}/archives/users.csv`,
        false
      );

      return mongooseDB.initUsers(usersFromCSV);
    } catch (error) {
      throw error;
    }
  },
};
