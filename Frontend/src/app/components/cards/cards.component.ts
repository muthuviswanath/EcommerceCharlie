import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../interfaces/IProduct";
import { ProductServices } from '../../services/product.services';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  IProduct: Array<any> = [];
  productsList: IProduct[];
  constructor(private _productServices: ProductServices) {

  }
  ngOnInit(): void {
    this._productServices.getAllProducts().subscribe(
      res => this.productsList = res
    );        // without subscribe will not be able to access.
  }

}
