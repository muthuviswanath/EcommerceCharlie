import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ICart } from "../interfaces/ICart";

@Injectable({
  providedIn: 'root'
})

export class CartServices implements OnInit {
  constructor(private http: HttpClient) { }
  baseurl: string = "https://localhost:33037/"
  ngOnInit(): void {

  }
  getAllCart(): Observable<ICart[]> {
    return this.http.get<ICart[]>(this.baseurl + "api/Carts")
  }
}
