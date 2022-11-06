import { Request, Response } from "express";
import { ratingsService } from "../services/ratings.service";
import { booksService } from "../services/books.service";
import { usersService } from "../services/users.service";
import { IRatingFilter, IRatingPut } from "../interfaces/Rating";
import { Ok, Error, NotFound } from "../utils/httpResponses";

export const ratingsController = {
  async getRating(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const rating = await ratingsService.getRating(id);

      if (rating) {
        Ok(res, "Data retrieved successfully", rating);
      } else {
        NotFound(res, "Rating not found");
      }
    } catch (error: any) {
      Error(res, error.message ? error.message : "Get rating error");
    }
  },

  async getRatings(req: Request, res: Response) {
    const filter: IRatingFilter = req.body;

    if (!Object.entries(filter).length) {
      NotFound(res, "Define at least one filter in body to search");
    }
    try {
      const allRatings = await ratingsService.getRatings(filter);
      Ok(res, "Data retrieved successfully", allRatings);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Get ratings error");
    }
  },

  async createRating(req: Request, res: Response) {
    const { user_id, isbn, book_rating } = req.body;

    if (!user_id || !book_rating || !isbn) {
      NotFound(res, "User id, book rating and isbn are required");
    }

    try {
      const currentUser = await usersService.getUsers({
        user_id: Number(user_id),
      });

      if (!currentUser.length) {
        NotFound(res, "User does not exist");
      }

      const currentBook = await booksService.getBooks({ isbn });

      if (!currentBook.length) {
        NotFound(res, "Book does not exist");
      }

      const newRating = {
        user_id,
        isbn,
        book_rating,
      };

      const createdRating = await ratingsService.createRating(newRating);
      Ok(res, "Data retrieved successfully", createdRating);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Create rating error");
    }
  },

  async updateRating(req: Request, res: Response) {
    const { id } = req.params;
    const toUpdate = req.body as IRatingPut;

    if (!Object.entries(toUpdate).length) {
      NotFound(res, "Define at least one filter in body to update");
    }
    try {
      const currentRating = await ratingsService.getRating(id);
      if (!currentRating) {
        NotFound(res, "Rating to update does not exist");
      }

      if (toUpdate.user_id) {
        const currentUser = await usersService.getUsers({
          user_id: Number(toUpdate.user_id),
        });

        if (!currentUser.length) {
          NotFound(res, "User does not exist");
        }
      }

      if (toUpdate.isbn) {
        const currentBook = await booksService.getBooks({
          isbn: toUpdate.isbn,
        });

        if (!currentBook.length) {
          NotFound(res, "Book does not exist");
        }
      }

      const updatedRating = await ratingsService.updateRating(id, toUpdate);
      Ok(res, "Data retrieved successfully", updatedRating);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Update rating error");
    }
  },

  async deleteRating(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const currentRating = await ratingsService.getRating(id);
      if (!currentRating) {
        NotFound(res, "Rating to delete does not exist");
      }
      const deletedRating = await ratingsService.deleteRating(id);
      Ok(res, "Data retrieved successfully", deletedRating);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Delete rating error");
    }
  },
};
