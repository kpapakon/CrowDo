
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ProjectService} from '../../project.service';
import {Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'crowdo-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.scss'] 
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  submitted=false;
  constructor(private projectService: ProjectService,private userService: UserService, private router: Router) { }  
  formSubmit(form: FormGroup) {  if (!form.valid) {return;}  console.log(form.value); }
  
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
  }

  onSubmit(){
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    this.userService.login(this.myForm.value).subscribe((i=>this.router.navigate(['seeallprojects'])));
  }
    
 

}
