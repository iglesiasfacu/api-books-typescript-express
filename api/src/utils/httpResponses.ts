import { Response } from "express";

export const Ok = (res: Response, msg: string, data: any) => {
  res.status(200).send({ status: 200, msg, data });
};

export const NotFound = (res: Response, msg: string, data?: any) => {
  res.status(403).send({ status: 403, msg, data: data ? data : [] });
};

export const Error = (res: Response, msg: string, data?: any) => {
  res.status(500).send({ status: 500, msg, data: data ? data : [] });
};
