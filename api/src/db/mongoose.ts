import connection from "../index";
import { BookModel } from "../models/Book";
import { RatingModel } from "../models/Rating";
import { UserModel } from "../models/User";
import { IBook, IBookFilter, IBookPut } from "../interfaces/Book";
import { IRating, IRatingFilter, IRatingPut } from "./../interfaces/Rating";
import { IUser, IUserFilter, IUserPut } from "../interfaces/User";

export const mongooseDB = {
  async initBooks(booksFromCSV: IBook[]): Promise<boolean> {
    const booksNumber = await BookModel.count();
    if (booksNumber) {
      await connection
        .dropCollection("books")
        .then(function () {
          console.log("Books collection drop!");
        })
        .catch(function (error: any) {
          return error;
        });
    }

    console.log("lengthBooks", booksFromCSV.length);

    console.log("inserting books...");
    await BookModel.insertMany(booksFromCSV)
      .then(function () {
        console.log("Books inserted");
      })
      .catch(function (error: any) {
        return error;
      });

    return true;
  },

  async initRatings(ratingsFromCSV: IRating[]): Promise<boolean> {
    const ratingsNumber = await RatingModel.count();
    if (ratingsNumber) {
      await connection
        .dropCollection("ratings")
        .then(function () {
          console.log("Ratings collection drop!");
        })
        .catch(function (error: any) {
          return error;
        });
    }

    console.log("lengthRatings", ratingsFromCSV.length);

    const firstRatings = ratingsFromCSV.slice(1, 250000);
    console.log("inserting first ratings...");
    await RatingModel.insertMany(firstRatings)
      .then(function () {
        console.log("First ratings inserted");
      })
      .catch(function (error: any) {
        return error;
      });

    const secondRatings = ratingsFromCSV.slice(250000, 500000);
    console.log("inserting seconds ratings...");
    await RatingModel.insertMany(secondRatings)
      .then(function () {
        console.log("Second ratings inserted");
      })
      .catch(function (error: any) {
        return error;
      });

    const thirdRatings = ratingsFromCSV.slice(500000, 750000);
    console.log("inserting third ratings...");
    await RatingModel.insertMany(thirdRatings)
      .then(function () {
        console.log("Third ratings inserted");
      })
      .catch(function (error: any) {
        return error;
      });

    const fourthRatings = ratingsFromCSV.slice(750000);
    console.log("inserting fourth ratings...");
    await RatingModel.insertMany(fourthRatings)
      .then(function () {
        console.log("Fourth ratings inserted");
      })
      .catch(function (error: any) {
        return error;
      });

    return true;
  },

  async initUsers(usersFromCSV: IUser[]): Promise<boolean> {
    const usersNumber = await UserModel.count();
    if (usersNumber) {
      await connection
        .dropCollection("users")
        .then(function () {
          console.log("Users collection drop!");
        })
        .catch(function (error: any) {
          return error;
        });
    }

    console.log("lengthUsers", usersFromCSV.length);

    await UserModel.insertMany(usersFromCSV)
      .then(function () {
        console.log("Users inserted");
      })
      .catch(function (error: any) {
        return error;
      });

    return true;
  },

  async setUserId(): Promise<number> {
    try {
      const user = await UserModel.find().sort({ $natural: -1 }).limit(1);
      return user[0].user_id;
    } catch (error) {
      throw error;
    }
  },

  async getBook(userId: string): Promise<IBook | null> {
    try {
      return BookModel.findOne({ _id: userId });
    } catch (error) {
      throw error;
    }
  },

  async getBooks(filterWhere: IBookFilter): Promise<IBook[]> {
    try {
      return BookModel.find(filterWhere).limit(100);
    } catch (error) {
      throw error;
    }
  },

  async createBook(book: IBook): Promise<IBook> {
    try {
      const bookCreated = new BookModel(book);
      return bookCreated.save();
    } catch (error) {
      throw error;
    }
  },

  async updateBook(id: string, toUpdate: IBookPut): Promise<IBook | null> {
    try {
      await BookModel.updateOne({ _id: id }, toUpdate);
      return BookModel.findOne({ _id: id });
    } catch (error) {
      throw error;
    }
  },

  async deleteBook(id: string): Promise<IBook | null> {
    try {
      const bookToDelete = await BookModel.findOne({ _id: id });
      await BookModel.deleteOne({ _id: id });
      return bookToDelete;
    } catch (error) {
      throw error;
    }
  },

  async getUser(id: string): Promise<IUser | null> {
    try {
      return UserModel.findOne({ _id: id });
    } catch (error) {
      throw error;
    }
  },

  async getUsers(filterWhere: IUserFilter): Promise<IUser[]> {
    try {
      return UserModel.find(filterWhere).limit(100);
    } catch (error) {
      throw error;
    }
  },

  async createUser(book: IUser): Promise<IUser> {
    try {
      const bookCreated = new UserModel(book);
      return bookCreated.save();
    } catch (error) {
      throw error;
    }
  },

  async updateUser(id: string, toUpdate: IUserPut): Promise<IUser | null> {
    try {
      await UserModel.updateOne({ _id: id }, toUpdate);
      return UserModel.findOne({ _id: id });
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(id: string): Promise<IUser | null> {
    try {
      const bookToDelete = await UserModel.findOne({ _id: id });
      await UserModel.deleteOne({ _id: id });
      return bookToDelete;
    } catch (error) {
      throw error;
    }
  },

  async getRating(id: string): Promise<IRating | null> {
    try {
      return RatingModel.findOne({ _id: id });
    } catch (error) {
      throw error;
    }
  },

  async getRatings(filterWhere: IRatingFilter): Promise<IRating[]> {
    try {
      return RatingModel.find(filterWhere).limit(100);
    } catch (error) {
      throw error;
    }
  },

  async createRating(book: IRating): Promise<IRating> {
    try {
      const bookCreated = new RatingModel(book);
      return bookCreated.save();
    } catch (error) {
      throw error;
    }
  },

  async updateRating(
    id: string,
    toUpdate: IRatingPut
  ): Promise<IRating | null> {
    try {
      await RatingModel.updateOne({ _id: id }, toUpdate);
      return RatingModel.findOne({ _id: id });
    } catch (error) {
      throw error;
    }
  },

  async deleteRating(id: string): Promise<IRating | null> {
    try {
      const bookToDelete = await RatingModel.findOne({ _id: id });
      await RatingModel.deleteOne({ _id: id });
      return bookToDelete;
    } catch (error) {
      throw error;
    }
  },
};
