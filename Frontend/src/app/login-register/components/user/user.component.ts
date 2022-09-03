import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData: any = {};

  constructor(private _loginService: LoginServices, private route: Router, private toast: NgToastService) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get User Data From Local
    this._loginService.getUserByIdLocal().subscribe(
      (response) => {
        this.userData = response;
      }
    );
  }

  // To Edit User Details
  editUserData() {
    // PUT: Subscribing To Edit User Data
    this._loginService.updateUser(this.userData.userId, this.userData).subscribe();
    this.toast.success({ detail: "SUCCESS", summary: 'User Updated Successfully', duration: 5000 });
    this.route.navigateByUrl('/account');
  }

}
