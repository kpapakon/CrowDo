import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService, Projects } from 'src/app/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-project-by-creator',
  templateUrl: './project-by-creator.component.html'
})
export class ProjectByCreatorComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  constructor(private projectService: ProjectService, private router: Router) { }
  
  project: Projects;
  

  ngOnInit() {
    this.myForm = new FormGroup({
      userCode: new FormControl("", [Validators.required])
    });
  }

  formSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    const userCode = localStorage.getItem('userCode');

    if (!userCode) {
      this.router.navigate(['login']);
      return;
    }

    this.projectService.GetProjectByCode(this.myForm.value.projectCode)
      .subscribe((data) => {
        this.project = data
      });

  }


}
