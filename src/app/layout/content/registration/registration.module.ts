import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UpdateprojectdescriptionComponent } from '../projects/edit-project/updateprojectdescription/updateprojectdescription.component';
import { CreatorsComponent } from './creators/creators.component';
import { LogoutComponent } from './logout/logout.component';



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
    path: 'logout', component: LogoutComponent
  }
]

@NgModule({
  declarations: [LoginComponent, SignupComponent, UpdateprojectdescriptionComponent, CreatorsComponent, LogoutComponent],
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
