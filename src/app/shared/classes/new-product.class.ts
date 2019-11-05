import { IProduct } from "../interfaces/product.interface";

export class NewProduct implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public lable: string,
    public price: number,
  ) {}
}
