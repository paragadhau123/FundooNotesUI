import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/userservice/user-service.service";
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from "../../Services/utilityservice/utility.service";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordComponent implements OnInit {
  hide = true;

  errors;
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  getPasswordErrorMsg() {
    return this.Password.hasError('required')
      ? 'Password is Required'
      : 'please enter valid Password';
  }

  constructor(private user: UserServiceService, private route: ActivatedRoute, private utility: UtilityService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    let token = this.route.snapshot.params.token;
    console.log(token);
    let userData = {
      "newPassword": this.Password.value,
    }

    if (this.Password.valid) {

      this.user.resetPassword(userData, token).subscribe((result: any) => {
        this.utility.displayMessage("Password Changed Succesfully");
      },
        (error) => {
          this.utility.displayMessage("Password Changed Unsuccesful");
        })
    }
  }
}
