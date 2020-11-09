import { Injectable } from '@angular/core';
import { HttpServiceService } from "../httpservice/http-service.service";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  // resetPassword(data) {
  //   return this.httpService.post(`${this.baseUrl}Accounts/ResetPassword`, data, true, { headers:  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaGF1cGFyYWc2NEBnbWFpbC5jb20iLCJpZCI6IjVmOTVjNDM5MzE0MDI4NjYxYTYxZTMxMyIsImV4cCI6MTYwNDkyMzkzNn0.Bfo4yCYMwswp1vtP4ugjFGJOKBXXvz8dE9LRc1rXs4s'
  // } );
  // }
  resetPassword(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaGF1cGFyYWc2NEBnbWFpbC5jb20iLCJpZCI6IjVmOTVjNDM5MzE0MDI4NjYxYTYxZTMxMyIsImV4cCI6MTYwNDkyMzkzNn0.Bfo4yCYMwswp1vtP4ugjFGJOKBXXvz8dE9LRc1rXs4s' }) }
    return this.httpService.post(`${this.baseUrl}Accounts/ResetPassword/`, data, true,options)
  }
}