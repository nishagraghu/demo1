import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { userNameValidator } from './username.validator';

@Component({
  selector: 'form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  form;
  // form= new FormGroup(
  //   {
  //   username:new FormControl('nishag',[Validators.required,Validators.maxLength(12),Validators.minLength(2),userNameValidator.noSpace],userNameValidator.unicue),
  //   password:new FormControl()
  //   }
  // )
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  constructor(Fb: FormBuilder) {
    this.form = Fb.group({
      username: ['nishag1', [Validators.required, Validators.maxLength(12), Validators.minLength(2), userNameValidator.noSpace], userNameValidator.unicue],
      password: []
    })
  }

  ngOnInit(): void {
  }

}
