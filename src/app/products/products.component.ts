import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { IProduct } from "../shared/interfaces/product.interface";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  adminProducts: Array<IProduct> = [];

  productAddToCart: any;
  cartItemCount: number;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.adminProducts = this.productService.getData();
  }

  public onAddCart(view: IProduct): void {
    console.log(view);
    this.productAddToCart = this.productService.getProductFromCart();
    if (this.productAddToCart == null) {
      this.productAddToCart = [];
      this.productAddToCart.push(view);
      this.productService.addProductToCart(this.productAddToCart);
    } else {
      let temptProduct = this.productAddToCart.find(p => p.id == view.id);
      if (temptProduct == null) {
        this.productAddToCart.push(view);
        this.productService.addProductToCart(this.productAddToCart);
      }
    }
  }
}
