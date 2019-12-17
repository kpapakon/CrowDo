import { ProjectService } from 'src/app/project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crowdo-add-project',
  templateUrl: './add-project.component.html',
})
export class AddProjectComponent implements OnInit {

  myForm: FormGroup;
  submitted=false;
  projectCode: string;
  constructor(private projectService: ProjectService, private router: Router, private activatedRoute: ActivatedRoute) { } 
  

  ngOnInit() {
    const userCode = localStorage.getItem('userCode');
    this.projectCode = this.activatedRoute.snapshot.params['code']

    if (!userCode) {
      this.router.navigate(['login']);
      return;
    }    
    this.myForm = new FormGroup({  
      projectCode: new FormControl("", [Validators.required]),
      userCode: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),  
      description: new FormControl("", [Validators.required]),
      startDate: new FormControl("", [Validators.required]),
      packageCode: new FormControl("", [Validators.required]),
      numberOfRequestedPackages: new FormControl("", [Validators.required]),
      totalAskingFunds: new FormControl("", [Validators.required]),
      totalReceivingFunds: new FormControl("", [Validators.required])
    });  

    this.fillForm();
    
  } 

  formSubmit(){
    this.submitted=true;
    if(!this.myForm.valid){
      return;
    }

    const actionToInvoke = this.projectCode
    ? this.projectService.updateproject(this.myForm.value)
    : this.projectService.AddProject(this.myForm.value);

    actionToInvoke.subscribe()
  }


  private fillForm() {
    
    if (!this.projectCode) {
      return;
    }
    this.projectService.GetProjectByCode(this.projectCode).subscribe(data => {
      this.myForm.patchValue(data)
    })
  }
  
  
}
