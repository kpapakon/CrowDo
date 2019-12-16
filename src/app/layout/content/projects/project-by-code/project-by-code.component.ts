import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Projects, ProjectService } from 'src/app/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-project-by-code',
  templateUrl: './project-by-code.component.html'
})
export class ProjectByCodeComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  constructor(private projectService: ProjectService, private router: Router) { }
  
  project: Projects;
  

  ngOnInit() {
    this.myForm = new FormGroup({
      projectCode: new FormControl("", [Validators.required])
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
