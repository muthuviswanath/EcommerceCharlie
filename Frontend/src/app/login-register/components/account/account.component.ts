import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userData: any = {};

  constructor(private _loginService: LoginServices, private route: Router) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get User Data From Local
    this._loginService.getUserByIdLocal().subscribe(
      (response) => {
        this.userData = response;
      }
    );
  }

  // To Edit User
  editUser() {
    this.route.navigateByUrl('/user')
  }

}
