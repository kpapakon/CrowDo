import { MyService } from './../../my.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'crowdo-updateprojecttitle',
  templateUrl: './updateprojecttitle.component.html',
  providers: [MyService]
})
export class UpdateprojecttitleComponent implements OnInit {

  myForm: FormGroup;
  constructor(private myService: MyService) { }  
  formSubmit(form: FormGroup) {  if (!form.valid) {      return;   }  console.log(form.value); }
  
  TitleFormControl = new FormControl("", [Validators.required]);
  
  
  
  ngOnInit() {    
    this.myForm = new FormGroup({  
      
      Title: this.TitleFormControl,
    });  
    
    this.TitleFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
  }
}