import { Request, Response } from "express";
import { usersService } from "../services/users.service";
import { IUserFilter, IUserPut } from "../interfaces/User";
import { Ok, Error, NotFound } from "../utils/httpResponses";

export const usersController = {
  async getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await usersService.getUser(id);

      if (user) {
        Ok(res, "Data retrieved successfully", user);
      } else {
        NotFound(res, "User not found");
      }
    } catch (error: any) {
      Error(res, error.message ? error.message : "Get user error");
    }
  },

  async getUsers(req: Request, res: Response) {
    const filter: IUserFilter = req.body;

    if (!Object.entries(filter).length) {
      NotFound(res, "Define at least one filter in body to search");
    }
    try {
      const allUsers = await usersService.getUsers(filter);
      Ok(res, "Data retrieved successfully", allUsers);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Get users error");
    }
  },

  async createUser(req: Request, res: Response) {
    const { location, age } = req.body;

    if (!location) {
      NotFound(res, "User id and location are required");
    }

    const nextUserId = await usersService.setUserId();

    const newUser = {
      user_id: nextUserId,
      location,
      age: age ? age : null,
    };

    try {
      const createdUser = await usersService.createUser(newUser);
      Ok(res, "Data retrieved successfully", createdUser);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Create user error");
    }
  },

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const toUpdate = req.body as IUserPut;

    if (!Object.entries(toUpdate).length) {
      NotFound(res, "Define at least one filter in body to update");
    }
    try {
      const currentUser = await usersService.getUser(id);
      if (!currentUser) {
        NotFound(res, "User to update does not exist");
      }
      console.log(toUpdate);
      const updatedUser = await usersService.updateUser(id, toUpdate);
      Ok(res, "Data retrieved successfully", updatedUser);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Update user error");
    }
  },

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const currentUser = await usersService.getUser(id);
      if (!currentUser) {
        NotFound(res, "User to delete does not exist");
      }
      const deletedUser = await usersService.deleteUser(id);
      Ok(res, "Data retrieved successfully", deletedUser);
    } catch (error: any) {
      Error(res, error.message ? error.message : "Delete user error");
    }
  },
};
