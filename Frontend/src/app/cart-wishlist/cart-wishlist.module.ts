import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartWishlistRoutingModule } from './cart-wishlist-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    CartComponent,
    OrderhistoryComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    CartWishlistRoutingModule
  ]
})
export class CartWishlistModule { }
