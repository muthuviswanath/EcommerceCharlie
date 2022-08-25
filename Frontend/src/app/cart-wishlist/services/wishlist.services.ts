import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IWishList } from "../interfaces/IWishList";

@Injectable({
  providedIn: 'root'
})

export class WishListServices implements OnInit {
  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:33037/"
  ngOnInit(): void {

  }
  getAllWishList(): Observable<IWishList[]> {
    return this.http.get<IWishList[]>(this.baseurl + "api/WishLists")
  }
}
