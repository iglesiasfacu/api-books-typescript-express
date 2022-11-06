import { ObjectId } from "mongoose";

export interface IRating {
  _id?: ObjectId;
  user_id: number;
  isbn: string;
  book_rating: number;
}

export interface IRatingFilter {
  _id?: string;
  user_id?: number;
  isbn?: string;
  book_rating?: number;
}

export interface IRatingPut {
  user_id?: number;
  isbn?: string;
  book_rating?: number;
}
