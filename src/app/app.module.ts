import { MyService } from './my.service';
import { CrowdoModule } from './crowdo/crowdo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrowdoComponent } from './crowdo/crowdo.component';
import { LoginComponent } from './registration/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegistrationModule } from './registration/registration.module';
import { RouterModule } from '@angular/router';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [ 
    AppComponent,
    CrowdoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [ 
    BrowserModule,
    CrowdoModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrationModule,
    RouterModule.forRoot([]),
    ProjectModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
