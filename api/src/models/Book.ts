import { Schema, model } from "mongoose";
import { IBook } from "../interfaces/Book";

export const BookSchema = new Schema<IBook>(
  {
    isbn: {
      type: String,
      required: [true, "Must provide a book isbn"],
    },
    book_title: {
      type: String,
      required: [true, "Must provide a book title"],
    },
    book_author: {
      type: String,
      required: [true, "Must provide a book author"],
    },
    year_of_publication: {
      type: Number,
      required: [true, "Must provide a book year of publication"],
    },
    publisher: {
      type: String,
      required: [true, "Must provide a book publisher"],
    },
    image_url_s: {
      type: String,
    },
    image_url_m: {
      type: String,
    },
    image_url_l: {
      type: String,
    },
  },
  { versionKey: false }
);

export const BookModel = model<IBook>("Book", BookSchema);
