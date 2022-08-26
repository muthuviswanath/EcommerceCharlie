import { Component, OnInit } from '@angular/core';
import { ICart } from '../../interfaces/ICart';
import { CartServices } from '../../services/cart.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: ICart[];
  cartData: any = {};
  constructor(private _cartService: CartServices) {
  }

  ngOnInit(): void {
    this._cartService.getAllCart().subscribe(
      res => this.cartList = res
    );
  }

  public updateCart() {
    this._cartService.updateCartData(this.cartData.cartId, this.cartData).subscribe(() => {
    });
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
}
