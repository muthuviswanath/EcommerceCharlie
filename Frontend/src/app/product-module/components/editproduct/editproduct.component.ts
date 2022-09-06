import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductServices } from '../../services/product.services';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  prodData: any = {};

  constructor(private _productServices: ProductServices, private route: Router, private toast: NgToastService) {
    let prodRecord = this._productServices.getOptions();
    // GET: Subscribing To Get Product By Product ID
    this._productServices.getProductById(prodRecord.productId).subscribe(
      (response) => {
        this.prodData = response;
      }
    )
  }

  ngOnInit(): void {

  }

  // To Edit Product
  editProductData() {
    // PUT: Subscribing To Edit Product Data
    this._productServices.updateProduct(this.prodData.productId, this.prodData).subscribe(()=>{
      this.toast.success({ detail: "SUCCESS", summary: 'Product Updated Successfully', duration: 5000 });
      this.route.navigateByUrl('/listproducts');
    });
   
  }

}
