import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServices } from 'src/app/login-register/services/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formData: any = {};
  public showMessage: boolean = false;
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  constructor(private _loginService: LoginServices, private builder: FormBuilder, private route: Router) {

  }

  ngOnInit(): void {
    this.loginForm;
  }

  loginForm: FormGroup = this.builder.group(
    {
      username: this.username,
      password: this.password,
      // email: this.email,
    }
  );


  public login() {
    this.formData = this.loginForm.value;
    this.showMessage = true;

    // Changes For API Logic
    if (this.loginForm.valid) {
      if (this.formData.username == "admin" && this.formData.password == "admin") {
        alert("Admin Login Successful!");
        this.route.navigateByUrl('/admin');
      }
      else {
        this._loginService.loginUser(this.loginForm.value).subscribe(
          (response) => {
            if (response == null) {
              alert("Invalid Credentials! Please Register before Sign In");
              this.route.navigateByUrl('/register');
            }
            else {
              alert("Login Successful!");
              this.route.navigateByUrl('/topproducts');
            }
          }
        );
      }
    }
  }

}
