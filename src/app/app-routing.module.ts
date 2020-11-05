import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"forgot",component:ForgotpasswordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
