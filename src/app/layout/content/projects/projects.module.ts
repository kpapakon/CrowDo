import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddprojectComponent } from './addproject/addproject.component';
import { SeeAllProjectsComponent } from './see-all-projects/see-all-projects.component';
import { FundProjectComponent } from './fund-project/fund-project.component';



@NgModule({
  declarations: [AddprojectComponent, SeeAllProjectsComponent, FundProjectComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
