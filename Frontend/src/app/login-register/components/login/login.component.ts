import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginServices } from 'src/app/login-register/services/login.services';
import { navchangeservice } from 'src/app/shared/services/navchange.service';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: any = {};
  showMessage: boolean = false;
  invalidLogin: boolean;
  userData: any;
  @Output() isLogged: boolean;
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private _loginService: LoginServices, private builder: FormBuilder, private route: Router, private toast: NgToastService, private _authService: AuthserviceService, private appService: navchangeservice) {

  }

  ngOnInit(): void {
    this.loginForm;
    this.isLogged;
  }

  // Form Group
  loginForm: FormGroup = this.builder.group(
    {
      username: this.username,
      password: this.password,
    }
  );

  // To Check User Credentials By JWT
  loginAuth() {
    this.formData = this.loginForm.value;
    if (this.loginForm.valid) {
      // POST: Subscribing To Check User Credentials And Get JWT
      this._authService.loginUserByJWT(this.formData).subscribe(
        (response) => {
          if (response != null) {
            const token = (<any>response).token;
            sessionStorage.setItem("JWT", token);
            // POST: Subscribing To Check Login Value And Get User
            this._loginService.loginUser(this.formData).subscribe(
              (response) => {
                this.userData = response;
                sessionStorage.setItem('userID', JSON.stringify(this.userData.userId));

                sessionStorage.setItem('auth', JSON.stringify(true));
                // console.log(sessionStorage.getItem('userID'));

              }
            );
            this.toast.success({ detail: "SUCCESS", summary: `Welcome ${this.formData.username}!`, duration: 2000 });
            if (this.formData.username == "admin") {
              this.appService.updateApprovalMessage({ loginfo: true, loguser: "admin" });
              this.route.navigate(["/admin"])
            }
            else {
              this.appService.updateApprovalMessage({ loginfo: true, loguser: "user" });
              this.route.navigate(["/"])
            }
          }
        },
        (error) => {
            this.toast.info({ detail: "INFO", summary: 'Please Register before Sign In', duration: 2000 });
            this.route.navigate(["/register"]);
        }
      );
    }
  }
}
