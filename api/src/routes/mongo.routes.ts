import express from "express";
const router = express.Router();
import { mongoController } from "../controllers/mongo.controller";

router
  .post("/init-books", mongoController.initBooks)
  .post("/init-ratings", mongoController.initRatings)
  .post("/init-users", mongoController.initUsers);

export default router;
