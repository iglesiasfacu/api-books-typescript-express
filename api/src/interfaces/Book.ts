import { ObjectId } from "mongoose";

export interface IBook {
  _id?: ObjectId;
  isbn: string;
  book_title: string;
  book_author: string;
  year_of_publication: number;
  publisher: string;
  image_url_s?: string | null;
  image_url_m?: string | null;
  image_url_l?: string | null;
}

export interface IBookFilter {
  _id?: string;
  isbn?: string;
  book_title?: string;
  book_author?: string;
  year_of_publication?: number;
  publisher?: string;
}

export interface IBookPut {
  book_title?: string;
  book_author?: string;
  year_of_publication?: number;
  publisher?: string;
  image_url_s?: string;
  image_url_m?: string;
  image_url_l?: string;
}
