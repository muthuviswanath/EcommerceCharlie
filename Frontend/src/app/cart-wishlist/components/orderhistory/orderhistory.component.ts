import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../interfaces/IOrder';
import { OrderServices } from '../../services/order.services';

@Component({
  selector: 'app-order',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  orderList: IOrder[];

  constructor(private _orderService: OrderServices) {

  }

  ngOnInit(): void {

    // GET: Subscribing To Get Order History of User
    this._orderService.getIndiviualOrderListById().subscribe(
      (response) => {
        this.orderList = response;
      }
    );
  }
}
