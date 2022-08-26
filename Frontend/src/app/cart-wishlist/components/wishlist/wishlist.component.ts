import { Component, OnInit } from '@angular/core';
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

  constructor(private service: WishListServices) {

  }
  ngOnInit(): void {
    this.service.getAllWishList().subscribe(res => this.wishList = res);
  }

}
