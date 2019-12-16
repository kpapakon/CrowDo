import { ContentComponent } from './layout/content/content.component';
import { UserService } from './user.service';
import { FundProjectComponent } from './layout/content/projects/fund-project/add-fund.component';
import { ProjectService } from './project.service';
import { CrowdoModule } from './crowdo/crowdo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrowdoComponent } from './crowdo/crowdo.component';
import { LoginComponent } from './layout/content/registration/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RegistrationModule } from './layout/content/registration/registration.module';
import { RouterModule } from '@angular/router';
import { AddProjectComponent } from './layout/content/projects/add-project/add-project.component';
import { ProjectModule } from './layout/content/projects/projects.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FundingService } from './funding.service';

@NgModule({
  declarations: [ 
    AppComponent,
    CrowdoComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FundProjectComponent,
    ContentComponent
  ],
  imports: [ 
    BrowserModule,
    CrowdoModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrationModule,
    RouterModule.forRoot([]),
    ProjectModule,
    HttpClientModule
  ],
  providers: [ProjectService,FundingService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
