import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../interfaces/IProduct";
import { ProductServices } from '../../services/product.services';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  IProduct: Array<any> = [];
  productsList: IProduct[];

  isBigEnough(element, index, array): any {
    return (element >= 10);
  }
  constructor(private _productServices: ProductServices) {

  }

  ngOnInit(): void {
    this._productServices.getAllProducts().subscribe(res => {
      this.productsList  = res.filter(element=>element.productDescription=="Sarees");
    }
    );
  }

}