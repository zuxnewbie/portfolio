import { IUser } from "./user.interface";

export interface IBaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: IUser | string;
  updatedBy: IUser | string;
}
