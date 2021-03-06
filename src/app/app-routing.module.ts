import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AuthGuard } from './auth.guard';
import { GetnotesComponent } from './components/getnotes/getnotes.component';
import { TrashnoteComponent } from './components/trashnote/trashnote.component';
import { ArchivenotesComponent } from './components/archivenotes/archivenotes.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "forgotPassword", component: ForgotpasswordComponent },
  { path: "resetPassword/:token", component: ResetpasswordComponent },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'notes',
        component: GetnotesComponent
      }, 
      {
        path: 'trash',
        component: TrashnoteComponent
      },
      {
        path: 'archive',
        component: ArchivenotesComponent
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
