import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'crowdo-updateprojectdescription',
  templateUrl: './updateprojectdescription.component.html'
})
export class UpdateprojectdescriptionComponent implements OnInit {

  myForm: FormGroup;
  constructor(private projectService: ProjectService, private router: Router) { }  
  formSubmit(form: FormGroup) {  if (!form.valid) {      return;   }  console.log(form.value); }
  
  submitted = false;
  DescriptionFormControl = new FormControl("", [Validators.required]);
  TitleFormControl = new FormControl("", [Validators.required]);
  ProjectCodeFormControl = new FormControl("", [Validators.required]);
  UserCodeFormControl = new FormControl("", [Validators.required]);
  StartDateFormControl = new FormControl("", [Validators.required]);
  NORPFormControl = new FormControl("", [Validators.required]);
  
  
  
  ngOnInit() {    
    this.myForm = new FormGroup({  
      description: this.DescriptionFormControl,
      title: this.TitleFormControl,
      projectCode: this.ProjectCodeFormControl,
      userCode: this.UserCodeFormControl,
      startdate: this.StartDateFormControl,
      numberofrequestedpackages: this.NORPFormControl
      
    });  
    this.DescriptionFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.TitleFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.UserCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.ProjectCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.StartDateFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.NORPFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    
  } 
  onSubmit(){
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    this.projectService.updateproject(this.myForm.value).subscribe((i=>this.router.navigate([''])));
  }
}