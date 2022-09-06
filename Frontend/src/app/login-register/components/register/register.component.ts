import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private _loginService: LoginServices, private route: Router, private toast: NgToastService) {

  }

  ngOnInit(): void {

  }

  // To Register User
  submit(): void {
    // POST: Subscribing To Add User Data In Database
    this._loginService.registerUser(this.model).subscribe(
      () => {
        this.toast.success({ detail: "SUCCESS", summary: 'Registration Successful!', duration: 5000 });
        this.route.navigateByUrl('/login')
      }
    );

  }
}
