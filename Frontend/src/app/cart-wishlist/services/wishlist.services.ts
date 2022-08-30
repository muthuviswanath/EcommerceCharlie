import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IWishList } from "../interfaces/IWishList";

@Injectable({
  providedIn: 'root'
})

export class WishListServices implements OnInit {

  baseURL: string = "http://localhost:33037/";
   // To get User ID at time of user Login using Local Storage
   userdata = localStorage.getItem('user');
   obj = JSON.parse(this.userdata);
 

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  // GET: Service To Get All Wishlist Data from Database
  public getAllWishList(): Observable<IWishList[]> {
    return this.http.get<IWishList[]>(`${this.baseURL}api/WishLists`);
  }
  
  public getIndiviualwishListById(): Observable<IWishList[]> {
    const userdata = localStorage.getItem('user');
    const  obj = JSON.parse(userdata);
    return this.http.get<IWishList[]>(`${this.baseURL}api/WishLists/user/${obj.userId}`);
  }

  // POST: Service To Add Wishlist Data in Database
  // Code Added By Apoorv
  public addToWishList(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    return this.http.post(`${this.baseURL}api/WishLists`, data, httpOptions);
  }

  // DELETE: Service To Delete Wishlist Data from Database
  public deleteWishListData(wishListId: any) {
    return this.http.delete(`${this.baseURL}api/WishLists/${wishListId}`, wishListId);
  }

  public getWishlistItemById(wishlistid:any){
    return this.http.get(`${this.baseURL}api/WishLists/${wishlistid}`)
  }
}
