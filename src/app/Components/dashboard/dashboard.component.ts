import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  isButtonVisible = true;
  token = localStorage.getItem('token')
  name = localStorage.getItem('EmployeeFirstName')
  email = localStorage.getItem('Email')
  constructor(public snackBar: MatSnackBar, public route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.snackBar.open("Logout successfully.", 'cancle')
    localStorage.removeItem('Token')
    localStorage.removeItem('EmployeeFirstName')
    localStorage.removeItem('Email')
    this.route.navigate(['login'])
  }

  changeVisiblity() {
    return this.isButtonVisible = !this.isButtonVisible
  }

  checkVisiblity() {
    return this.isButtonVisible
  }

}