
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {MyService} from '../../my.service';
import {Validators} from '@angular/forms';
import { User } from 'src/app/user';
import { Router } from '@angular/router';


@Component({
  selector: 'crowdo-login',
  templateUrl: './login.component.html',
  providers: [MyService]
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  constructor(private myService: MyService, private router: Router) { }  
  formSubmit(form: FormGroup) {  if (!form.valid) {      return;   }  console.log(form.value); }
  
  UsernameFormControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
  PasswordFormControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
  
  ngOnInit() {    
    this.myForm = new FormGroup({  
      Username: this.UsernameFormControl,  
      Password: this.PasswordFormControl,
    });  
    this.UsernameFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.PasswordFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.myService.Login(this.myForm.value).subscribe((i=>this.router.navigate([' '])))   
  } 

}
