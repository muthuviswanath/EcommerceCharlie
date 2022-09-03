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
    // GET: Subscribing To Get Order History Of User
    this._orderService.getIndiviualOrderListById().subscribe(
      (response) => {
        this.orderList = response;
      }
    );
  }

  // To Sort By Recent Order
  sortByRecent() {
    return this.orderList.sort((a: any, b: any) => {
      return <any>new Date(b.orderDate) - <any>new Date(a.orderDate);
    });
  }

  // To Sort By Previous Order
  sortByPrevious() {
    return this.orderList.sort((a: any, b: any) => {
      return <any>new Date(a.orderDate) - <any>new Date(b.orderDate);
    });
  }
}
