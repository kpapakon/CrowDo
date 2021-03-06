import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UpdateprojectdescriptionComponent } from '../projects/edit-project/updateprojectdescription/updateprojectdescription.component';
import { CreatorsComponent } from './creators/creators.component';




const routes: Route[]  = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path : 'signup', component : SignupComponent

  },
  {
    path : 'updateproject', component : UpdateprojectdescriptionComponent

  },
  {
    path : 'viewallcreators', component : CreatorsComponent

  },
  {
    path: 'creators', component: CreatorsComponent
  }
]

@NgModule({
  declarations: [LoginComponent, SignupComponent, UpdateprojectdescriptionComponent, CreatorsComponent],
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
