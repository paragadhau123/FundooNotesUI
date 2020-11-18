import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { UserServiceService } from '../../Services/userservice/user-service.service';
import { UtilityService } from "../../Services/utilityservice/utility.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  errors;
  constructor(private user: UserServiceService, public route: Router, private utility: UtilityService) {
  }

  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,]);
  FirstName = new FormControl("", [
    Validators.pattern('[a-zA-Z]{2,}')]);
  LastName = new FormControl("", [
    Validators.pattern('[a-zA-Z]{2,}')]);
  ConfirmPassword = new FormControl("", [])


  getEmailErrorMsg() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }


  getFirstNameErrorMsg() {
    return this.FirstName.hasError('required')
      ? 'FirstName is Required'
      : 'please enter valid FirstName';
  }

  getLastNameErrorMsg() {
    return this.LastName.hasError('required')
      ? 'LastName is Required'
      : 'please enter valid LastName';
  }

  getPasswordErrorMsg() {
    return this.Password.hasError('required')
      ? 'Password is Required'
      : 'please enter valid Password';
  }
  getConfirmPasswordErrorMsg() {
    this.ConfirmPassword.hasError('required')
      ? 'ConfirmPassword is Required'
      : 'Password and ConfirmPassword do not match';
  }

  ngOnInit(): void { }
  register() {
    let userdata = {
      "employeeFirstName": this.FirstName.value,
      "employeeLastName": this.LastName.value,
      "email": this.Email.value,
      "phoneNumber": "9604445258",
      "password": this.Password.value,
    }
    if (this.FirstName.valid && this.LastName.valid && this.Email.valid && this.Password.valid && this.ConfirmPassword.valid) {
      this.user.register(userdata).subscribe(response => {
        this.utility.displayMessage("register Successfully");
        this.route.navigate(['login'])

      },
        error => {
          this.utility.displayMessage("Register Unsuccessfully");
        }
      )
    }
  }
}