import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/User";

export const UserSchema = new Schema<IUser>(
  {
    user_id: {
      type: Number,
      required: [true, "Must provide a user user id"],
    },
    location: {
      type: String,
      required: [true, "Must provide a user location"],
    },
    age: {
      type: Number,
    },
  },
  { versionKey: false }
);

export const UserModel = model<IUser>("User", UserSchema);
