import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  username = new FormControl('', [Validators.required, Validators.minLength(7)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  constructor(private _loginService: LoginServices, private builder: FormBuilder, private route: Router) {

  }

  ngOnInit(): void {
    this.loginForm;
  }

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password,
    email: this.email,
  })


  public login() {
    this.formData = this.loginForm.value;
    this.showMessage = true;
    alert('Login Success!!')
    console.log(this.formData);

    // Changes For API Logic
    if (this.loginForm.valid) {
      this._loginService.loginUser(this.loginForm.value).subscribe(res => {
        console.log(res)
        if (res == null) {
          this.route.navigateByUrl('/register')
        }
        else {
          this.route.navigateByUrl('/topproducts')
        }
      });
    }
  }

}
