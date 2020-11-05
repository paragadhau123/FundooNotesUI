import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/userservice/user-service.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  form: FormGroup;
  constructor(private fb: FormBuilder,private userservice:UserServiceService,public snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      emailFormControl: ["", 
        Validators.email],
      passFormControl: ""
    })
  }
  onSubmit() {
    let userData = {
      "email": this.form.controls.emailFormControl.value,
      "password": this.form.controls.passFormControl.value
    }
    console.log(userData)
    this.userservice.login(userData).subscribe((result: any) => {
      this.snackBar.open("login successfully.", 'cancle')
      console.log(result)
    }, (error) => {
      this.snackBar.open("login unsuccessfull.", 'failed')
      console.log(error)
    })
    console.log(this.form.value)
  }
  ngOnInit(): void {
  }

}