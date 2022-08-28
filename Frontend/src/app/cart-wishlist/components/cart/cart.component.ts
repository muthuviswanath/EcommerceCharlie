import { Component, OnInit } from '@angular/core';
import { ICart } from '../../interfaces/ICart';
import { CartServices } from '../../services/cart.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  cartList: ICart[];
  cartData: any = {};
  cartPrice: number = 0;

  constructor(private _cartService: CartServices) {

  }

  ngOnInit(): void {
    this._cartService.getAllCart().subscribe(
      (response) => {
        this.cartList = response;
      }
    );
  }

  public updateCart() {
    this._cartService.updateCartData(this.cartData.cartId, this.cartData).subscribe(
      () => {

      }
    );
    window.location.reload();
  }

  public incrementItem(cartid: any) {
    this._cartService.getCartById(cartid).subscribe(
      (response) => {
        this.cartData = response;
        this.cartData.cartTotal++;
        this.updateCart();
      }
    );
  }

  public decrementItem(cartId: any) {
    this._cartService.getCartById(cartId).subscribe(
      (response) => {
        this.cartData = response;
        this.cartData.cartTotal--;
        this.updateCart();
      }
    );
    window.location.reload();
  }

  public removeItem(cartId: any) {
    this._cartService.deleteCartData(cartId).subscribe(
      () => {

      }
    );
    alert("Cart Item Removed Successfully!")
    window.location.reload();
  }
}
