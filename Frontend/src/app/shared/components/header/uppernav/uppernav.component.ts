import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProduct } from 'src/app/landing-page/interfaces/IProduct';
import { ProductServices } from 'src/app/landing-page/services/product.services';

@Component({
  selector: 'app-uppernav',
  templateUrl: './uppernav.component.html',
  styleUrls: ['./uppernav.component.css']
})
export class UppernavComponent implements OnInit {

  public searchString: string = ""

  constructor(private _productService: ProductServices, private http: HttpClient) {

  }
  // data: any;

  ngOnInit(): void {

  }

  submitSearch() {
    const payload = { searchString: this.searchString };
    this._productService.searchProducts(this.searchString).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}

