import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
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
  items:any={}
  sub:any;
  id:any;
  
  isBigEnough(element, index, array): any {
    return (element >= 10);
  }

  prodData:any={}

  constructor(private _productServices: ProductServices,private route:ActivatedRoute ) {
  }

  ngOnInit(): void {
    

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
      this.prodData = this._productServices.getProductById(this.id).subscribe(
        res => {this.prodData = res
          // console.log(this.prodData.productName);
        }
      )

      this._productServices.getAllProducts().subscribe(res => {
        this.productsList  = res.filter(element=>element.productDescription==this.prodData.productDescription);
      }
      );
      
    }

}
