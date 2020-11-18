import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/userservice/user-service.service";
import { UtilityService } from "../../Services/utilityservice/utility.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServiceService, private utility: UtilityService) {
    this.form = this.fb.group({
      emailFormControl: ["",
        Validators.email]
    })
  }

  onSubmit() {
    let userData = {
      "email": this.form.controls.emailFormControl.value,
    }
    if (this.form.valid) {
      this.userService.forgotPassword(userData).subscribe((result: any) => {
        this.utility.displayMessage("reset password link is send on mail")
      }, (error) => {
        this.utility.displayMessage("password can not be reset")
      })
    }
  }
  ngOnInit(): void {
  }

}
