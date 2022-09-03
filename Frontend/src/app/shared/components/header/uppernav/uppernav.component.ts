import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/cart-wishlist/interfaces/ICart';
import { IWishList } from 'src/app/cart-wishlist/interfaces/IWishList';
import { CartServices } from 'src/app/cart-wishlist/services/cart.services';
import { WishListServices } from 'src/app/cart-wishlist/services/wishlist.services';
import { navchangeservice } from 'src/app/shared/services/navchange.service';

@Component({
  selector: 'app-uppernav',
  templateUrl: './uppernav.component.html',
  styleUrls: ['./uppernav.component.css']
})
export class UppernavComponent implements OnInit {

  searchString: string = "";
  isLoggedIn: boolean = false;
  userLoggedIn: any = {};
  isAdmin: boolean = false;
  cartList: ICart[];
  wishList: IWishList[];
  cartCount: number = 0;
  wishListCount: number = 0;

  // To get User ID at time of user Login Using Session Storage
  userID = sessionStorage.getItem('userID');

  constructor(private route: Router, private _cartService: CartServices, private _wishListService: WishListServices, private appService: navchangeservice) {

  }

  ngOnInit(): void {
    this.isLoggedIn = JSON.parse(sessionStorage.getItem('auth'));
    this.appService.currentApprovalStageMessage.subscribe(msg => this.userLoggedIn = msg);
    if (this.userID === "17") {
      this.isAdmin = true;
    }
    // GET: To display Cart Item Count In UpperNav.
    this._cartService.getIndiviualCartId().subscribe(
      (response) => {
        this.cartList = response;
        this.cartCount = this.cartList.length;
      },
      (error) => {
        console.log(error);
      }
    );

    // GET: To Display Wishlist Item Count In UpperNav.
    this._wishListService.getIndiviualwishListById().subscribe(
      (response) => {
        this.wishList = response;
        this.wishListCount = this.wishList.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // To Search Products
  submitSearch() {
    const payLoad = { searchString: this.searchString };
    this.route.navigateByUrl(`/search/` + this.searchString).then(
      () => {
        window.location.reload();
      }
    )
  }

  // To Logout User
  logout() {
    sessionStorage.removeItem("JWT");
    sessionStorage.setItem('userID', JSON.stringify(null));
    sessionStorage.setItem('auth', JSON.stringify(false));
    this.appService.updateApprovalMessage({ loginfo: false, loguser: null });
    this.route.navigate(["/login"]).then(
      () => { window.location.reload(); }
    )
  }
}

