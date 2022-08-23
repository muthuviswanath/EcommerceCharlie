import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public product_list:Array<any>=[];
  constructor() { 
    this.product_list=[
      {prodId:121,prodName:"Mouse",prodDesc:"Wireless",prodPrice:234.5},
      {prodId:122,prodName:"Keybord",prodDesc:"Wired",prodPrice:4535.5},
      {prodId:123,prodName:"Monitor",prodDesc:"LG",prodPrice:13424.5},
    ];
  }

  ngOnInit(): void {
  }

}
