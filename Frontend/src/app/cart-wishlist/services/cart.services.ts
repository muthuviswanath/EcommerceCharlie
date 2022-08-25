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
}
