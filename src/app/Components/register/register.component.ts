import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms"
import { UserServiceService } from "../../Services/user-service.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServiceService,public snackBar:MatSnackBar) {
    this.form = this.fb.group({
      firstFormControl: ["",
        Validators.pattern('[a-zA-Z]{2,}')],
      lastFormControl: ["",
        Validators.pattern('[a-zA-Z]{2,}')],
      emailFormControl: ["",
        Validators.email],
      passFormControl: ["",
        Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
      passConfirmFormControl: ["", Validatepass],
    })
    function Validatepass(control: AbstractControl) {
      if (control && (control.value != null || control.value != undefined)) {
        const passConfirmValue = control.value;
        const passControl = control.root.get('passFormControl')
        if (passControl) {
          const passValue = passControl.value;
          if (passValue !== passConfirmValue) {
            return {
              isError: true
            }
          }
        }
      }
    }
  }


  onSubmit() {
    let userData = {
      "employeeFirstName": this.form.controls.firstFormControl.value,
      "employeeLastName": this.form.controls.lastFormControl.value,
      "email": this.form.controls.emailFormControl.value,
      "phoneNumber": "9604445258",
      "password": this.form.controls.passFormControl.value
    }
    console.log(userData)
    this.userService.register(userData).subscribe((result: any) => {
      this.snackBar.open("registered successfully.", 'success')
      console.log(result)
    }, (error) => {
      this.snackBar.open("registration unsuccessfull.", 'failed')
      console.log(error)
    })


    console.log(this.form.value)
  }
  ngOnInit(): void {
  }

}
