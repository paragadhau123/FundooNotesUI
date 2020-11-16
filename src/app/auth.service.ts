import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticate = false;
  
  isAuthenticated() {
    if (localStorage.getItem('Token')) {
      return true;
    }
    else {
      return false
    }
  }
}
