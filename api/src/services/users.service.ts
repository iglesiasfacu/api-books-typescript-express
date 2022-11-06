import { mongooseDB } from "../db/mongoose";
import { IUser, IUserFilter, IUserPut } from "../interfaces/User";

export const usersService = {
  async getUser(id: string): Promise<IUser> {
    try {
      const oneUser = await mongooseDB.getUser(id);
      return oneUser as IUser;
    } catch (error) {
      throw error;
    }
  },

  async getUsers(filter: IUserFilter): Promise<IUser[]> {
    try {
      const allUsers = await mongooseDB.getUsers(filter);
      return allUsers as IUser[];
    } catch (error) {
      throw error;
    }
  },

  async createUser(user: IUser): Promise<IUser> {
    try {
      const createdUser = await mongooseDB.createUser(user);
      return createdUser as IUser;
    } catch (error) {
      throw error;
    }
  },

  async updateUser(id: string, toUpdate: IUserPut): Promise<IUser> {
    try {
      const updatedUser = await mongooseDB.updateUser(id, toUpdate);
      return updatedUser as IUser;
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(id: string): Promise<IUser> {
    try {
      const deletedUser = await mongooseDB.deleteUser(id);
      return deletedUser as IUser;
    } catch (error) {
      throw error;
    }
  },

  async setUserId(): Promise<number> {
    try {
      let nextUserId = await mongooseDB.setUserId();
      nextUserId += 1;
      return nextUserId as number;
    } catch (error) {
      throw error;
    }
  },
};
