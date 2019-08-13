import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  
  
  constructor( ) { 

  }

  form=new FormGroup({
    username: new FormControl('',
      [Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required)
  });
get username(){
  return this.form.get('username');
}
  ngOnInit() {
  }
 
}
