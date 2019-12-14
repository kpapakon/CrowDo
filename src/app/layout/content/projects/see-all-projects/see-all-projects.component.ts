import { Component, OnInit } from '@angular/core';
import { ProjectService, Projects } from 'src/app/project.service';

@Component({
  selector: 'crowdo-see-all-projects',
  templateUrl: './see-all-projects.component.html' 
})
export class SeeAllProjectsComponent implements OnInit {

  Arr = Array; //Array type captured in a variable
  num:number = 20;
  projects: Array<Projects>;
  constructor(private projectService: ProjectService) { }
  ngOnInit() {
    this.projectService.GetAllProjects().subscribe((data)=>{this.projects=data});
  }
  
}

