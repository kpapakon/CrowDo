import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import { ProjectService } from 'src/app/project.service';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-signup',
  templateUrl: './signup.component.html',
  providers: [ProjectService]
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  submitted=false;
  constructor(private userService: UserService,private router: Router) { }  
  
  formSubmit(form: FormGroup) {  if (!form.valid) {  return; }  console.log(form.value); }

  NameFormControl=new FormControl("", [Validators.required, Validators.minLength(5)]);
  AddressFormControl=new FormControl("", [Validators.required, Validators.minLength(3)]);
  UsernameFormControl = new FormControl("", [Validators.required, Validators.minLength(5)]);
  PasswordFormControl = new FormControl("", [Validators.required, Validators.minLength(5)]);
  UserCodeFormControl = new FormControl("", [Validators.required]);

  ngOnInit() {    
    this.myForm = new FormGroup({  
      Name: this.NameFormControl,
      Address: this.AddressFormControl,
      Username: this.UsernameFormControl,  
      Password: this.PasswordFormControl,
      UserCode: this.UserCodeFormControl
    });  
    this.NameFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.AddressFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
    this.UsernameFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.PasswordFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
    this.UserCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
  } 
  onSubmit(){
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    this.userService.SignUp(this.myForm.value).subscribe((i=>this.router.navigate([''])));
  }
    

}


  
  
 
