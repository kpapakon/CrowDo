import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SeeAllProjectsComponent } from './see-all-projects/see-all-projects.component';
import { FundProjectComponent } from './fund-project/add-fund.component';
import { UpdateprojectdescriptionComponent } from './edit-project/updateprojectdescription/updateprojectdescription.component';
import { ProjectByTitleComponent } from './project-by-title/project-by-title.component';
import { ProjectByYearComponent } from './project-by-year/project-by-year.component';
import { ProjectByCodeComponent } from './project-by-code/project-by-code.component';
import { ProjectByCreatorComponent } from './project-by-creator/project-by-creator.component';
import { GetMyFundingsComponent } from './get-my-fundings/get-my-fundings.component';


const routes: Route[]  = [
  {
    path: 'addproject', component: AddProjectComponent
  },
  {
    path: 'editproject/:code', component: AddProjectComponent
  },
  {
    path: 'seeallprojects', component: SeeAllProjectsComponent
  },
  {
    path : 'addfund', component : FundProjectComponent

  },
  {
    path : 'update_project', component : UpdateprojectdescriptionComponent

  },
  {
    path : 'projecttitle', component : ProjectByTitleComponent

  },
  {
    path : 'projectyear', component : ProjectByYearComponent

  },
  {
    path : 'projectcode', component : ProjectByCodeComponent

  },
  {
    path : 'projectusercode', component : ProjectByCreatorComponent

  },
  {
    path: 'myfundings', component: GetMyFundingsComponent
  }
]

@NgModule({
  declarations: [AddProjectComponent, SeeAllProjectsComponent, ProjectByTitleComponent, ProjectByYearComponent, ProjectByCodeComponent, ProjectByCreatorComponent, GetMyFundingsComponent],
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
