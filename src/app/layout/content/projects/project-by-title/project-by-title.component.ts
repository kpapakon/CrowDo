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
  submitted = false;
  constructor(private projectService: ProjectService, private router: Router) { }
  //formSubmit(form: FormGroup) { if (!form.valid) { return; } console.log(form.value); }
  project: Projects;
  

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl("", [Validators.required])
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

    this.projectService.GetProjectByTitle(this.myForm.value.title)
      .subscribe((data) => {
        this.project = data
      });

  }

}
