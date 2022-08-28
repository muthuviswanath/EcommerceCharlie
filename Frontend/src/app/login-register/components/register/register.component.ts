import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private _loginService: LoginServices, private route: Router) {

  }

  ngOnInit(): void {

  }

  // To Register User
  public submit(): void {
    // POST: Subscribing To Add User Data in Database
    this._loginService.registerUser(this.model).subscribe(
      () => {

      }
    );
    alert('Registration Successful!');
    this.route.navigateByUrl('/login')
  }

}
