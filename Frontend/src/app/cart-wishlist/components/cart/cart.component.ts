import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../../interfaces/ICart';
import { CartServices } from '../../services/cart.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  // tempList: any;
  // cartList: Array<any> = [];
  cartList: ICart[];
  cartData: any = {};

  constructor(private _cartService: CartServices) {

  }

  ngOnInit(): void {
    this._cartService.getAllCart().subscribe(
      (response) => {
        this.cartList = response
        // this.tempList = response;
        // this.cartList = this.tempList.$values;
        console.log(this.cartList);
      }
    );
  }

  public updateCart() {
    this._cartService.updateCartData(this.cartData.cartId, this.cartData).subscribe(
      () => {

      }
    );
  }

  public incrementItem(cartid: any) {
    this._cartService.getCartById(cartid).subscribe(
      res => {
        this.cartData = res;
        this.cartData.cartTotal++;
        this.updateCart();
      }
    );
  }

  public decrementItem(cartId: any) {
    this._cartService.getCartById(cartId).subscribe(
      res => {
        this.cartData = res;
        this.cartData.cartTotal--;
        this.updateCart();
      }
    );
  }

  public removeItem(cartId: any) {
    this._cartService.deleteCartData(cartId).subscribe(
      () => {

      }
    )
  }
}
