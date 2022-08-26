import { Component, OnInit } from '@angular/core';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private _loginService: LoginServices) {

  }

  ngOnInit(): void {

  }

  public submit(): void {
    this._loginService.registerUser(this.model).subscribe(
      () => {

      }
    );
    alert('Registration Successful');
  }

}
