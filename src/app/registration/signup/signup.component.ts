import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ProjectService} from '../../project.service';
import {Validators} from '@angular/forms';

@Component({
  selector: 'crowdo-signup',
  templateUrl: './signup.component.html',
  providers: [ProjectService]
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  constructor(private projectService: ProjectService) { }  
  
  formSubmit(form: FormGroup) {  if (!form.valid) {  return; }  console.log(form.value); }

  NameFormControl=new FormControl("", [Validators.required, Validators.minLength(5)]);
  AddressFormControl=new FormControl("", [Validators.required, Validators.minLength(3)]);
  UsernameFormControl = new FormControl("", [Validators.required, Validators.minLength(5)]);
  PasswordFormControl = new FormControl("", [Validators.required, Validators.minLength(5)]);

  ngOnInit() {    
    this.myForm = new FormGroup({  
      Name: this.NameFormControl,
      Address: this.AddressFormControl,
      Username: this.UsernameFormControl,  
      Password: this.PasswordFormControl,
    });  
    this.NameFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.AddressFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
    this.UsernameFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.PasswordFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
  } 

}


  
  
 
