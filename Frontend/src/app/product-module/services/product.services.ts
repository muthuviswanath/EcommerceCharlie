import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/IProduct";
import { HttpHeaders } from "@angular/common/http";
import { ICart } from "src/app/cart-wishlist/interfaces/ICart";
import { IWishList } from "src/app/cart-wishlist/interfaces/IWishList";
@Injectable({
  providedIn: 'root'
})

export class ProductServices implements OnInit {

  baseURL: string = "http://localhost:33037/";
  data: any = {};

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
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseURL}api/Products`);
  }

  // GET: Service To Get Product Item by Product ID
  getProductById(productId: any) {
    return this.http.get(`${this.baseURL}api/Products/${productId}`);
  }

  // POST: Service To get Products that Matches Search Value
  searchProducts(searchString: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Products/search`, JSON.stringify(searchString), httpOptions);
  }

  // POST: Service To add Product In Database
  addProduct(productData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Products`, productData, httpOptions);
  }

  // PUT: Service To Update Product Data
  updateProduct(productId: any, productData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.put(`${this.baseURL}api/Products/${productId}`, productData, httpOptions);
  }

  // DELETE: Service To Delete Product From Database
  deleteProduct(productId: any) {
    return this.http.delete(`${this.baseURL}api/Products/${productId}`, productId);
  }
//added method to display badge count for cart items
  getCartCount(): Observable<ICart[]> {
    const userID = sessionStorage.getItem('userID');
    return this.http.get<ICart[]>(`${this.baseURL}api/carts/user/${userID}`);
  }
  
 
}
