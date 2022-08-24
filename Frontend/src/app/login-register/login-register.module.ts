import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginServices } from './services/login.services';

const Components = [LoginComponent]
@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
  ],
  providers: [LoginServices],
  exports: Components
})
export class LoginRegisterModule { }
