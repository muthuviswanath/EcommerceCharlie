import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BadgeServices } from 'src/app/shared/services/badge.services';

import { IWishList } from '../../interfaces/IWishList';
import { WishListServices } from '../../services/wishlist.services';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList: IWishList[];
  wishListData: any = {};
  wishListBadgecount:number=0;
  wishListCount:number=0;

  constructor(private _wishListService: WishListServices, private toast: NgToastService,private _badgeService:BadgeServices) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get All Wishlist Data Of User
    this.loadWishListData();
  }

  // To Remove Wishlist Data
  removeItem(wishListId: any) {
    // DELETE: Subscribing To Delete Wishlist Item
    this._wishListService.deleteWishListData(wishListId).subscribe(()=>{
      this.loadWishListData();
    });
    this.toast.success({ detail: "SUCCESS", summary: 'Wishlist Item Removed Successfully!', duration: 5000 });
   
  }

  loadWishListData(){
    this._wishListService.getIndiviualwishListById().subscribe(
      (response) => {
        this.wishList = response;
     
      }
    );
  }
}
