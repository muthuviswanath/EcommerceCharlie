import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uppernav',
  templateUrl: './uppernav.component.html',
  styleUrls: ['./uppernav.component.css']
})
export class UppernavComponent implements OnInit {

  public searchString: string = "";
  public isLoggedIn: boolean;
  user = localStorage.getItem('user');
  public isAdmin: boolean = false;

  constructor(private route: Router) {

  }

  ngOnInit(): void {
    this.isLoggedIn = JSON.parse(localStorage.getItem('auth'));
    if (this.user == 'admin') {
      this.isAdmin = true;
      this.isLoggedIn = true;
    }
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

  // To Remove User From Local Storage
  logout() {
    localStorage.setItem('user', JSON.stringify(null));
    localStorage.setItem('auth', JSON.stringify(false));
    this.route.navigateByUrl("/login").then(
      () => {
        window.location.reload();
      }
    );
  }
}

