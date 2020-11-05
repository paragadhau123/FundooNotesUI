import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../../Services/userservice/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  errors;
  constructor(private user: UserServiceService, public snackBar: MatSnackBar, ) { }

  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }

  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }
  ngOnInit(): void {
  }

  login() {      
      let userData = {
        "email": this.Email.value,
        "password": this.Password.value
      }
      console.log(userData)
      this.user.login(userData).subscribe((result: any) => {
        this.snackBar.open("login successfully.", 'cancle')
        console.log(result)
      }, (error) => {
        this.snackBar.open("login unsuccessfull.", 'failed')
        console.log(error)
      })
    }
  }
