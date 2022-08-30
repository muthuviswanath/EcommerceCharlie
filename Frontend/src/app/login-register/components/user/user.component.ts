import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData: any = {};

  constructor(private _loginService: LoginServices, private route: Router) {

  }

  ngOnInit(): void {
    // GET: Subscribing To Get User Data From Local
    this._loginService.getUserByIdLocal().subscribe(
      (response) => {
        this.userData = response;
      }
    )
  }

  // To Edit User Details
  public editUserData() {
    // PUT: Subscribing To Edit User Data
    this._loginService.updateUser(this.userData.userId, this.userData).subscribe(
      () => {

      }
    );
    alert("User Updated Successfully");
    this.route.navigateByUrl('/account');
  }

}
