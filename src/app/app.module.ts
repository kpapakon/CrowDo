import { MyService } from './my.service';
import { CrowdoModule } from './crowdo/crowdo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrowdoComponent } from './crowdo/crowdo.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CrowdoComponent,
    ProjectlistComponent
  ],
  imports: [
    BrowserModule,
    CrowdoModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
