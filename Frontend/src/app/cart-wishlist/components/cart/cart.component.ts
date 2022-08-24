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

  constructor(private service: CartServices) {

  }
  ngOnInit(): void {
    this.service.getAllCart().subscribe(res => this.cartList = res);
  }
}
