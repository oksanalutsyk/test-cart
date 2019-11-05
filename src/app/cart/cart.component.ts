import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/interfaces/product.interface';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  defaultQuantity: number = 1;
  productAddToCart: any;
  allTotal: number
  total:number;

  product: Array<IProduct> = []
  view: IProduct;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productAddToCart = this.productService.getProductFromCart();
    for (let i in this.productAddToCart) {
      this.productAddToCart[i].quantity = 1
    }
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddToCart);
    this.calculateAllTotal(this.productAddToCart)

  }

  public calculateAllTotal(allItems: IProduct[]) {
    this.total = 0;
    for (let i in allItems) {
      this.total += allItems[i].price;
    }
  }

  public deleteProduct(i): void {
    this.productAddToCart.splice(i, 1);
    this.productService.addProductToCart(this.productAddToCart)
    this.calculateAllTotal(this.productAddToCart)
  }

  public deleteCart(): void {
    this.productService.removeAllProductFromCart()
  }

}
