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

  constructor(private _cartService: CartServices) {

  }

  ngOnInit(): void {
    this._cartService.getAllCart().subscribe(
      res => this.cartList = res
    );
  }
}
