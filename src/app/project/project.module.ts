import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SeeAllProjectsComponent } from './see-all-projects/see-all-projects.component';

const routes: Route[]  = [
  {
    path: 'addproject', component: AddProjectComponent
  },
  {
    path: 'seeallprojects', component: SeeAllProjectsComponent
  }
]

@NgModule({
  declarations: [AddProjectComponent, SeeAllProjectsComponent],
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
