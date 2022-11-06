import express from "express";
const router = express.Router();
import { ratingsController } from "../controllers/ratings.controller";

router
  .get("/ratings/:id", ratingsController.getRating)
  .get("/ratings", ratingsController.getRatings)
  .post("/ratings", ratingsController.createRating)
  .put("/ratings/:id", ratingsController.updateRating)
  .delete("/ratings/:id", ratingsController.deleteRating);

export default router;
