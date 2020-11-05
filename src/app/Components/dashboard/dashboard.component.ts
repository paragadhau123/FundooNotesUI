import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { UserService } from 'src/app/service/user.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  isButtonVisible = true;
  token = localStorage.getItem('token')
  name = localStorage.getItem('name')
  email = localStorage.getItem('email')
  constructor( public snackBar: MatSnackBar, public route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // let data = {}
    // this.http.logout(data).subscribe(response => {
    //   if (!response) {
    //     this.snackBar.open("logout successfully.", 'success')
    //     this.route.navigate(['login'])
    //   }
    // }, error => {
    //   this.snackBar.open("logout unsuccessfully.", 'failed')
    // })
  }

  changeVisiblity() {
    return this.isButtonVisible = !this.isButtonVisible
  }

  checkVisiblity() {
    return this.isButtonVisible
  }

}