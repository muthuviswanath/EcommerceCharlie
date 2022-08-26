import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ICart } from "../interfaces/ICart";

@Injectable({
  providedIn: 'root'
})

export class CartServices implements OnInit {
  constructor(private http: HttpClient) { }
  baseURl: string = "http://localhost:33037/"
  ngOnInit(): void {

  }

  public data: any = {}

  setOptions(option, value) {
    this.data[option] = value;
  }

  getOptions() {
    return this.data;
  }

  getAllCart(): Observable<ICart[]> {
    return this.http.get<ICart[]>(this.baseURl + "api/Carts")
  }

  public addToCart(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.baseURl + "api/Carts", data, httpOptions);
  }

  public getCartById(cartid: any) {
    return this.http.get(`${this.baseURl}api/Carts/${cartid}`);
  }

  public updateCartData(cartid: any, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.put(this.baseURl + "api/Carts/" + cartid, data, httpOptions);
  }
}
