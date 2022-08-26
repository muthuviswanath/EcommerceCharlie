import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/IProduct";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class ProductServices implements OnInit {
  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:33037/"
  ngOnInit(): void {

  }
  getAllProducts(): Observable<IProduct[]> {
    return this
      .http
      .get<IProduct[]>(this.baseUrl + "api/Products");
  }
  public getProductById(prodid: any) {
    return this.http.get(`${this.baseUrl}api/Products/${prodid}`);
  }

  public searchProducts(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.baseUrl + "api/Products/search", JSON.stringify(data), httpOptions);
  }

}
