import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { MyService } from '../my.service';
import { Validators } from "@angular/forms";


@Component({
  selector: 'crowdo-crowdo',
  templateUrl: './crowdo.component.html',
  providers: [MyService]
})
export class CrowdoComponent implements OnInit {

  myForm: FormGroup;
  constructor(private myService: MyService) { }  
  
  formSubmit(form: FormGroup) {  if (!form.valid) {      return;   }  console.log(form.value); }
  
  projectCodeFormControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
  titleFormControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
  descriptionFormControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
  
  ngOnInit() {    
    this.myForm = new FormGroup({  
      projectCode: this.projectCodeFormControl,  
      title: this.titleFormControl,
      description: this.descriptionFormControl
    });  
    this.projectCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.titleFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.descriptionFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.myForm = new FormGroup({  angular: new FormControl("", Validators.required) });
    this.myForm = new FormGroup({  favouriteLanguage: new FormControl("",Validators.required) });  
  
  } 
}  


