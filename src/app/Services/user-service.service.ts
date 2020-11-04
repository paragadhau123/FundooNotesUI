import { Injectable } from '@angular/core';
import { HttpServiceService } from "./http-service.service";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) {

  }
  register(data){
    console.log("user service called");
    return this.httpService.register('Accounts/RegisterAccount', data);
  }

  login(data){
    return this.httpService.login('Accounts/LoginAccount', data);
  }

  forgotPassword(data){
    return this.httpService.forgotPassword('Accounts/ForgetPassword', data);
  }
}
