import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticate = false;
  // login(email: string, password: string): boolean {
  //   if (email === 'adhauparag64@gmail.com' && password === 'Parag123#') {
  //     this.isAuthenticate = true;
  //     return this.isAuthenticate;
  //   }
  //   return this.isAuthenticate;
  //   // constructor() { }
  // }
  isAuthenticated() {
    if (localStorage.getItem('Token')) {
      return true;
    }
    else {
      return false
    }
  }
}
