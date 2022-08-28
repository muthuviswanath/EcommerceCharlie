import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/IProduct";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class ProductServices implements OnInit {

  baseURL: string = "http://localhost:33037/";
  public data: any = {};

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }


  setOptions(option, value) {
    this.data[option] = value;
  }

  getOptions() {
    return this.data;
  }

  // GET: Service To Get All Products from Database
  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseURL}api/Products`);
  }

  // GET: Service To Get Product Item by Product ID
  public getProductById(productId: any) {
    return this.http.get(`${this.baseURL}api/Products/${productId}`);
  }

  // POST: Service To get Products that matches Search Value
  public searchProducts(searchString: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Products/search`, JSON.stringify(searchString), httpOptions);
  }

  // POST: Service To add Product in Database
  public addProduct(productData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Products`, productData, httpOptions);
  }

  // PUT: Service To Update Product Data
  public updateProduct(productId: any, productData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.put(`${this.baseURL}api/Products/${productId}`, productData, httpOptions);
  }

  // DELETE: Service To Delete Product from Database
  public deleteProduct(productId: any) {
    return this.http.delete(`${this.baseURL}api/Products/${productId}`, productId);
  }
}
