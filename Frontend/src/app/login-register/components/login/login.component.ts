import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginServices } from 'src/app/login-register/services/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formData: any = {};
  public showMessage: boolean = false;
  @Output() isLogged: boolean;
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  constructor(private _loginService: LoginServices, private builder: FormBuilder, private route: Router, private toast: NgToastService) {

  }

  ngOnInit(): void {
    this.loginForm;
    this.isLogged;
  }

  loginForm: FormGroup = this.builder.group(
    {
      username: this.username,
      password: this.password,
      // email: this.email,
    }
  );

  // To Check User Credentials
  public login() {
    this.formData = this.loginForm.value;
    this.showMessage = true;

    // Changes For API Logic
    if (this.loginForm.valid) {
      if (this.formData.username == "admin" && this.formData.password == "admin") {
        localStorage.setItem('user', 'admin');
        localStorage.setItem('auth', JSON.stringify(true));
        this.toast.success({ detail: "SUCCESS", summary: 'Admin Login Successful!', duration: 5000 });
        this.route.navigateByUrl('/admin').then(
          () => {
            window.location.reload();
          }
        )
      }
      else {
        // POST: Subscribing To Check Login Value
        this._loginService.loginUser(this.loginForm.value).subscribe(
          (response) => {
            if (response != null) {
              // localStorage.removeItem('user');
              localStorage.setItem('user', JSON.stringify(response));
              var userdata = localStorage.getItem('user');
              var obj = JSON.parse(userdata);
              localStorage.setItem('auth', JSON.stringify(true));
              this.route.navigateByUrl('/').then(
                () => {
                  window.location.reload();
                }
              )
              this.toast.success({ detail: "SUCCESS", summary: `Welcome ${obj.userName}!`, duration: 5000 });
            }
            else {
              this.toast.info({ detail: "INFO", summary: 'Please Register before Sign In', sticky: true });
              this.route.navigateByUrl('/register');
            }
          }
        );
      }
    }
  }

}
