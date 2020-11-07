import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from "../../Services/userservice/user-service.service";
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
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
  constructor( private user:UserServiceService) {}
 
  ngOnInit(): void {
  }
  onSubmit() {
    let userData = {
      "newPassword": this.Password.value,
     
    }
    if(this.Password.valid){
    this.user.resetPassword(userData).subscribe((result: any) => {
      console.log(result)     
    },
    (error) => {
      console.log(error)
    })
  }
 }
}
