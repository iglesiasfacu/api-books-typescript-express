import { mongooseDB } from "../db/mongoose";
import { IRating, IRatingFilter, IRatingPut } from "../interfaces/Rating";

export const ratingsService = {
  async getRating(id: string): Promise<IRating> {
    try {
      const oneRating = await mongooseDB.getRating(id);
      return oneRating as IRating;
    } catch (error) {
      throw error;
    }
  },

  async getRatings(filter: IRatingFilter): Promise<IRating[]> {
    try {
      const allRatings = await mongooseDB.getRatings(filter);
      return allRatings as IRating[];
    } catch (error) {
      throw error;
    }
  },

  async createRating(rating: IRating): Promise<IRating> {
    try {
      const createdRating = await mongooseDB.createRating(rating);
      return createdRating as IRating;
    } catch (error) {
      throw error;
    }
  },

  async updateRating(id: string, toUpdate: IRatingPut): Promise<IRating> {
    try {
      const updatedRating = await mongooseDB.updateRating(id, toUpdate);
      return updatedRating as IRating;
    } catch (error) {
      throw error;
    }
  },

  async deleteRating(id: string): Promise<IRating> {
    try {
      const deletedRating = await mongooseDB.deleteRating(id);
      return deletedRating as IRating;
    } catch (error) {
      throw error;
    }
  },
};
