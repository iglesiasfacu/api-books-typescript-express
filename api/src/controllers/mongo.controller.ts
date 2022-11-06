import { Request, Response } from "express";
import { mongoService } from "../services/mongo.service";
import { Error, Ok } from "../utils/httpResponses";

export const mongoController = {
  async initBooks(_req: Request, res: Response) {
    try {
      const data = await mongoService.initBooks();
      Ok(res, "Books inserted", data);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Error initializing books");
    }
  },

  async initRatings(_req: Request, res: Response) {
    try {
      const data = await mongoService.initRatings();
      Ok(res, "Ratings inserted", data);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Error initializing ratings");
    }
  },

  async initUsers(_req: Request, res: Response) {
    try {
      const data = await mongoService.initUsers();
      Ok(res, "Users inserted", data);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Error initializing users");
    }
  },
};
