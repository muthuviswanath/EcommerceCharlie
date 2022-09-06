import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any = {};
  discountprice: any;
  fakeArray = new Array(5);
  constructor() {

  }

  ngOnInit(): void {
    this.discountprice = 100 - Math.round((this.items.productOfferPrice / this.items.price) * 100)
  }

}
