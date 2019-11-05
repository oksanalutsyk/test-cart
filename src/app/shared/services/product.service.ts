import { Injectable } from "@angular/core";
import { IProduct } from "../interfaces/product.interface";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private _products: IProduct[];
  public get products() {
    return this._products || [];
  }

  private data: Array<IProduct> = [
    {
      id: 1,
      name: "Product 1",
      lable: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price: 100
    },
    {
      id: 2,
      name: "Product 2",
      lable: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 200
    },
    {
      id: 3,
      name: "Product 3",
      lable: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 300
    },
    {
      id: 4,
      name: "Product 4",
      lable: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 400
    },
    {
      id: 5,
      name: "Product 5",
      lable: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 500
    }
  ];
  constructor() {}

  getData(): Array<IProduct> {
    return this.data;
  }
  public addProductToCart(view: IProduct[]) {
    localStorage.setItem("product", JSON.stringify(view));
    this._products = view;
  }
  public getProductFromCart() {
    let result = [];
    let json = localStorage.getItem("product");
    if (json) {
      result = JSON.parse(json);
    }

    this._products = result;
    return result;
  }

  public removeAllProductFromCart() {
    this._products = [];
    return localStorage.removeItem("product");
  }
}
