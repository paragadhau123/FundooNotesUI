import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/userservice/user-service.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServiceService, public snackBar: MatSnackBar) {
    this.form = this.fb.group({
      emailFormControl: ["",
        Validators.email]
    })
  }
  onSubmit() {
    let userData = {
      "email": this.form.controls.emailFormControl.value,
    }
    console.log(userData)
    this.userService.forgotPassword(userData).subscribe((result: any) => {
      this.snackBar.open("reset password link is send on mail", 'success')
      console.log(result)
    }, (error) => {
      this.snackBar.open("password can not be reset", 'failed')
      console.log(error)
    })
  }
  ngOnInit(): void {
  }

}
