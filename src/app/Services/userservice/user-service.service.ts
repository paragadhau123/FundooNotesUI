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
    let options =
      { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Token': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaGF1cGFyYWc2NEBnbWFpbC5jb20iLCJpZCI6IjVmOTVjNDM5MzE0MDI4NjYxYTYxZTMxMyIsImV4cCI6MTYwNDU2NjkxM30.sYex-ySpGi286R3PYHD2Q003dphtfyB60TD9PWv4r_A' }) }
    return this.httpService.post(`${this.baseUrl}Accounts/ResetPassword`, data, true, options);
  }
}
