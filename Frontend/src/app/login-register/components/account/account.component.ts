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
    let userRecord = this._loginService.getOptions();
    // GET: Subscribing To Get Product By Product ID
    this._loginService.getUserById(userRecord.userId).subscribe(
      (response) => {
        this.userData = response;
      }
    )
  }

  ngOnInit(): void {

  }

  // To Edit User
  public editUser() {
    this.route.navigateByUrl('/user')
  }

}
