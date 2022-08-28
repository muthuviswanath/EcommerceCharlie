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
  totalCartPrice: number = 0;

  constructor(private _cartService: CartServices) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get All Cart Items
    this._cartService.getAllCart().subscribe(
      (response) => {
        this.cartList = response;
        for (let item of this.cartList) {
          this.totalCartPrice += (item.cartQuantity * item.cartProductPrice)
        }
      }
    );
  }

  // To Update Cart
  public updateCart() {
    // PUT: Subscribing To Update Cart Data
    this._cartService.updateCartData(this.cartData.cartId, this.cartData).subscribe(
      () => {

      }
    );
    window.location.reload();
  }

  // To Increment Quantity of Cart Item
  public incrementItem(cartid: any) {
    // GET: Subscribing To Get Cart Item by Cart ID
    this._cartService.getCartById(cartid).subscribe(
      (response) => {
        this.cartData = response;
        this.cartData.cartTotal++;
        this.updateCart();
      }
    );
  }

  // To Decrement Quantity of Cart Item
  public decrementItem(cartId: any) {
    // GET: Subscribing To Get Cart Item by Cart ID
    this._cartService.getCartById(cartId).subscribe(
      (response) => {
        this.cartData = response;
        this.cartData.cartTotal--;
        this.updateCart();
      }
    );
    window.location.reload();
  }

  // To Remove Cart Item
  public removeItem(cartId: any) {
    // DELETE: Subscribing To Delete Cart Item
    this._cartService.deleteCartData(cartId).subscribe(
      () => {

      }
    );
    alert("Cart Item Removed Successfully!")
    window.location.reload();
  }
}
