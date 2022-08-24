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

  constructor(private service: OrderServices) {

  }
  ngOnInit(): void {
    this.service.getAllOrder().subscribe(res => this.orderList = res);
  }
}
