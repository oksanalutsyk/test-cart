import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  
      { path: 'emptyCart', component: EmptyCartComponent },
      { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '/products' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
