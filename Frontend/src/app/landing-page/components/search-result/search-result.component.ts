import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/IProduct';
import { ProductServices } from '../../services/product.services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  sub: any;
  id: any;
  productsList: IProduct[];
  searchList: any = [];

  constructor(private route: ActivatedRoute, private _productService: ProductServices) {

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._productService.searchProducts(this.id).subscribe(
      (response) => {
        this.searchList = response
        console.log(this.searchList);
      }
    );
  }
}
