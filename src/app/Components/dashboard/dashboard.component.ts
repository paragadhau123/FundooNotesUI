import { Component, OnInit } from '@angular/core';
import { UtilityService } from "../../Services/utilityservice/utility.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isButtonVisible = true;
  showFiller = false;
  token = localStorage.getItem('token')
  name = localStorage.getItem('EmployeeFirstName')
  email = localStorage.getItem('Email')
  constructor(private utility: UtilityService, public route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.utility.displayMessage("Logout successfully")
    localStorage.removeItem('Token')
    localStorage.removeItem('EmployeeFirstName')
    localStorage.removeItem('Email')
    this.route.navigate(['login'])
  }
}