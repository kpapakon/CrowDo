import { UpdateprojectdescriptionComponent } from './layout/content/projects/edit-project/updateprojectdescription/updateprojectdescription.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Projects {
  projectCode: string;
  userCode: string;
  title: string;
  description: string;
  startDate: string;
  packageCode: string;
  numberOfRequestedPackages: string;
  totalAskingFunds: number;
  totalReceivingFunds: number;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly endpoint = 'http://localhost:54396/Crowdo/';

  constructor(private http: HttpClient) { }

  GetAllProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.endpoint + 'all_projects');
  }

  updateproject(project: Projects): Observable<Projects> {
    return this.http.put<Projects>(this.endpoint + 'update_project', project);
  }

  AddProject(project: Projects): Observable<Projects> {
    return this.http.post<Projects>(this.endpoint + 'add_project', project);
  }

  GetProjectByTitle(title: string): Observable<any> {
    return this.http.get<Projects[]>(this.endpoint + 'projecttitle/' + title);
  }

  GetProjectByYear(year: number): Observable<any> {
    return this.http.get<Projects[]>(this.endpoint + 'projectyear/' + year);
  }
  
  GetProjectByCode(code: string): Observable<any> {
    return this.http.get<Projects>(this.endpoint + 'projectcode/' + code);
  }

 
}



