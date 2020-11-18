import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor(public snackBar: MatSnackBar) { }

  displayMessage(message){
    this.snackBar.open(message, 'cancle',{
      duration: 1000})
  }
}
