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

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseURL}api/Products`);
  }

  public getProductById(prodId: any) {
    return this.http.get(`${this.baseURL}api/Products/${prodId}`);
  }

  public searchProducts(prodData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/Products/search`, JSON.stringify(prodData), httpOptions);
  }

}
