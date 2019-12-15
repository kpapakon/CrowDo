import { Component, OnInit } from '@angular/core';
import { Projects, ProjectService } from 'src/app/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-project-by-title',
  templateUrl: './project-by-title.component.html'
})
export class ProjectByTitleComponent implements OnInit {

  myForm: FormGroup;
  submitted=false;
  constructor(private projectService: ProjectService, private router: Router) { }  
  formSubmit(form: FormGroup) {  if (!form.valid) {return;}  console.log(form.value); }
  
  TitleFormControl = new FormControl("", [Validators.required, Validators.minLength(3)]);
  
  ngOnInit() {    
    this.myForm = new FormGroup({  
     
      title: this.TitleFormControl
    });  
    
    this.TitleFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    //this.projectService.GetProjectByTitle(this.myForm.value).subscribe((data)=>{this.myForm.value=data});
    
  }
  
}
