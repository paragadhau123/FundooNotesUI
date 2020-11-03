import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstFormControl: ["", 
        Validators.pattern('[a-zA-Z]{2,}')],
      lastFormControl: ["", 
        Validators.pattern('[a-zA-Z]{2,}')],
      emailFormControl: ["", 
        Validators.email],
      passFormControl: ["", 
        Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
      passConfirmFormControl: [""],
    })
    } 
  onubmit() {
    console.log(this.form.value)
  }
  ngOnInit(): void {
  }
}
