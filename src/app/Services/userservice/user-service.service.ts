import { Injectable } from '@angular/core';
import { HttpServiceService } from "../httpservice/http-service.service";
import { HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
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

  resetPassword(data) {
    return this.httpService.post(`${this.baseUrl}Accounts/ResetPassword`, data, true, { headers: { 'Authorization': localStorage.getItem('Token') } });
  }
}
