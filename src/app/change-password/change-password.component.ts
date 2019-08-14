import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form=fb.group({
      oldPassword: ['',Validators.required],
      newPassword: ['',Validators.required],
      conformPassword: ['',Validators.required]
    })
  }
              get oldPassword(){
                return this.form.get('oldPassword');
              }
              get newPassword(){
                return this.form.get('newPassword');
              }
              get conformPassword(){
                return this.form.get('conformPassword');
              }

  ngOnInit() {
  }

}
