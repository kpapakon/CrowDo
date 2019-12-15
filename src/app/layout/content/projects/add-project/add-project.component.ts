import { ProjectService } from 'src/app/project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-add-project',
  templateUrl: './add-project.component.html',
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  myForm: FormGroup;
  submitted=false;
  constructor(private projectService: ProjectService,private router: Router) { }  
  
  formSubmit(form: FormGroup) {  if (!form.valid) {  return; }  console.log(form.value); }
  
  ProjectCodeFormControl=new FormControl("", [Validators.required]);
  UserCodeFormControl=new FormControl("", [Validators.required]);
  TitleFormControl = new FormControl("", [Validators.required, Validators.minLength(5)]);
  DescriptionFormControl = new FormControl("", [Validators.required, Validators.minLength(5)]);
  StartDateFormControl = new FormControl("", [Validators.required]);
  PackageCodeFormControl = new FormControl("", [Validators.required]);
  NumberOfRequestedPackagesFormControl = new FormControl("", [Validators.required]);


  ngOnInit() {    
    this.myForm = new FormGroup({  
      projectCode: this.ProjectCodeFormControl,
      userCode: this.UserCodeFormControl,
      title: this.TitleFormControl,  
      description: this.DescriptionFormControl,
      startDate: this.StartDateFormControl,
      packageCode: this.PackageCodeFormControl,
      numberOfRequestedPackages: this.NumberOfRequestedPackagesFormControl
    });  
    this.ProjectCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.UserCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
    this.TitleFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.DescriptionFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.StartDateFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.PackageCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.NumberOfRequestedPackagesFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
  } 
  onSubmit(){
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    this.projectService.AddProject(this.myForm.value).subscribe((i=>this.router.navigate([''])));
  }
  
}
