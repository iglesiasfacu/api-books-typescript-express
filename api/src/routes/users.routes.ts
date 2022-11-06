import express from "express";
const router = express.Router();
import { usersController } from "../controllers/users.controller";

router
  .get("/users/:id", usersController.getUser)
  .get("/users", usersController.getUsers)
  .post("/users", usersController.createUser)
  .put("/users/:id", usersController.updateUser)
  .delete("/users/:id", usersController.deleteUser);

export default router;
