import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductServices } from '../../services/product.services';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  model: any = {};

  constructor(private _productServices: ProductServices, private route: Router, private toast: NgToastService) {

  }

  ngOnInit(): void {

  }

  // To Add Product In Databse
  submitProduct() {

    // GET: Subscrbing to Add Product In Database
    this._productServices.addProduct(this.model).subscribe(()=>{
      this.toast.success({ detail: "SUCCESS", summary: 'Product Added Successfully!', duration: 5000 });
      this.route.navigateByUrl('/listproducts');
    });
    
  }

}
