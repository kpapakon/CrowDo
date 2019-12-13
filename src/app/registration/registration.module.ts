import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UpdateprojectdescriptionComponent } from './updateprojectdescription/updateprojectdescription.component';
import { UpdateprojecttitleComponent } from './updateprojecttitle/updateprojecttitle.component';
import { SeeAllProjectsComponent } from '../project/see-all-projects/see-all-projects.component';

const routes: Route[]  = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path : 'signup', component : SignupComponent

  },
  {
    path : 'projectdescription', component : UpdateprojectdescriptionComponent

  },
  {
    path : 'projecttitle', component : UpdateprojecttitleComponent

  },
  {
    path : 'seeallprojects', component : SeeAllProjectsComponent

  }
]

@NgModule({
  declarations: [LoginComponent, SignupComponent, UpdateprojectdescriptionComponent, UpdateprojecttitleComponent],
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
export class RegistrationModule { }
