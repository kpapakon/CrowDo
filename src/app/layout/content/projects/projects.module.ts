import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SeeAllProjectsComponent } from './see-all-projects/see-all-projects.component';
import { FundProjectComponent } from './fund-project/add-fund.component';
import { UpdateprojectdescriptionComponent } from './edit-project/updateprojectdescription/updateprojectdescription.component';
import { ProjectByTitleComponent } from './project-by-title/project-by-title.component';


const routes: Route[]  = [
  {
    path: 'addproject', component: AddProjectComponent
  },
  {
    path: 'seeallprojects', component: SeeAllProjectsComponent
  },
  {
    path : 'addfund', component : FundProjectComponent

  },
  {
    path : 'update_project', component : UpdateprojectdescriptionComponent

  }
]

@NgModule({
  declarations: [AddProjectComponent, SeeAllProjectsComponent, ProjectByTitleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectModule { }
