import { Injectable } from '@angular/core';
import { HttpServiceService } from "../httpservice/http-service.service";
import { environment } from "../../../environments/environment";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) {

  }

  baseUrl = environment.baseUrl;

  register(data) {
    return this.httpService.post(`${this.baseUrl}Accounts/RegisterAccount`, data);
  }

  login(data) {
    return this.httpService.post(`${this.baseUrl}Accounts/LoginAccount`, data);
  }

  forgotPassword(data) {
    return this.httpService.post(`${this.baseUrl}Accounts/ForgetPassword`, data);
  }

  resetPassword(data, token) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }) }
    return this.httpService.post(`${this.baseUrl}Accounts/ResetPassword/`, data, true, options)
  }
}