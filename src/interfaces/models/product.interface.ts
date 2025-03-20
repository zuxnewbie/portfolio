import { IBaseModel } from "./base.interface";

export interface IProduct extends IBaseModel {
  name: string;
  price: number;
}
