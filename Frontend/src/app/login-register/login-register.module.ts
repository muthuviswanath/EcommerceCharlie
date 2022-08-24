import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginServices } from './services/login.services';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

const Components = [LoginComponent, RegisterComponent]
@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    FormsModule,
    LoginRegisterRoutingModule,

  ],
  providers: [LoginServices],
  exports: Components
})
export class LoginRegisterModule { }
