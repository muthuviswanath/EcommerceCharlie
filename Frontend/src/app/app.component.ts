import { Component } from '@angular/core';
import { IProduct } from "./interfaces/IProduct";
import { ProductServices } from './services/product.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
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


