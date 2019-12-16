import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProjectService, Projects } from 'src/app/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-project-by-year',
  templateUrl: './project-by-year.component.html'
})
export class ProjectByYearComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  constructor(private projectService: ProjectService, private router: Router) { }
  formSubmit(form: FormGroup) { if (!form.valid) { return; } console.log(form.value); }
  projects: Array<Projects>;
  YearFormControl = new FormControl("", [Validators.required]);

  ngOnInit() {
    this.myForm = new FormGroup({
      year: this.YearFormControl
    });

    this.YearFormControl.valueChanges.subscribe((value: string) => { // value is the current value 
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.projectService.GetProjectByYear(this.myForm.value.year)
      .subscribe((data) => {
        this.projects = data
      });

  }

}
