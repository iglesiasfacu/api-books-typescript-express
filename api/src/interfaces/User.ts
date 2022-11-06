import { ObjectId } from "mongoose";

export interface IUser {
  _id?: ObjectId;
  user_id: number;
  location: string;
  age?: number | null;
}

export interface IUserFilter {
  _id?: string;
  user_id?: number;
  location?: string;
  age?: number;
}

export interface IUserPut {
  user_id?: number;
  location?: string;
  age?: number;
}
