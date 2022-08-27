import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServices } from '../../services/product.services';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  model: any = {};

  constructor(private _productServices: ProductServices, private route: Router) {

  }

  ngOnInit(): void {

  }

  public submitProduct() {
    this._productServices.addProduct(this.model).subscribe(
      () => {

      }
    );
    alert("Product Added Successfully!");
    this.route.navigateByUrl('/listproduct');
  }

}
