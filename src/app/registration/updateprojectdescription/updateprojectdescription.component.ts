import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'crowdo-updateprojectdescription',
  templateUrl: './updateprojectdescription.component.html',
  providers: [MyService]
})
export class UpdateprojectdescriptionComponent implements OnInit {

  myForm: FormGroup;
  constructor(private myService: MyService) { }  
  formSubmit(form: FormGroup) {  if (!form.valid) {      return;   }  console.log(form.value); }
  
  DescriptionFormControl = new FormControl("", [Validators.required]);
  
  
  
  ngOnInit() {    
    this.myForm = new FormGroup({  
      Description: this.DescriptionFormControl,  
      //Title: this.TitleFormControl,
    });  
    this.DescriptionFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    //this.TitleFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    //}); 
  } 

}
