import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  myForm: FormGroup;
  submitted=false;
  constructor(private userService: UserService, private router: Router) { }  
  formSubmit(form: FormGroup) {  if (!form.valid) {return;}  console.log(form.value); }
  
  
  
  ngOnInit() {    
    
  }

  onSubmit(){
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    this.userService.logout(this.myForm.value).subscribe((i=>this.router.navigate([''])));
  }
}
