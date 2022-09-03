import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../product-module/interfaces/IProduct';
import { ProductServices } from '../../../product-module/services/product.services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  flag: boolean = true;
  sub: any;
  id: any;
  productsList: IProduct[];
  searchList: any = [];

  constructor(private activatedRoute: ActivatedRoute, private _productService: ProductServices) {

  }

  ngOnInit(): void {
    // Getting Search Value From The URL
    this.sub = this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    );

    // GET: Subscribing To Get All The Products That Matches Search Value
    this._productService.searchProducts(this.id).subscribe(
      (response) => {
        this.searchList = response;
        if (this.searchList.length == 0) {
          this.flag = false;
        }
      },
    );
  }
}
