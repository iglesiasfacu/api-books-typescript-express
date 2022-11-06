import { Schema, model } from "mongoose";
import { IRating } from "../interfaces/Rating";

export const RatingSchema = new Schema<IRating>(
  {
    user_id: {
      type: Number,
      required: [true, "Must provide a rating user id"],
    },
    isbn: {
      type: String,
      required: [true, "Must provide a rating isbn"],
    },
    book_rating: {
      type: Number,
      required: [true, "Must provide a rating book rating"],
    },
  },
  { versionKey: false }
);

export const RatingModel = model<IRating>("Rating", RatingSchema);
