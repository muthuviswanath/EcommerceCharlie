import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/IProduct";

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
  public getProductById(prodid:any){
    return this.http.get(`${this.baseUrl}api/Products/${prodid}`);
  }
}
