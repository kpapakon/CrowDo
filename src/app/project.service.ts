import { UpdateprojectdescriptionComponent } from './layout/content/projects/edit-project/updateprojectdescription/updateprojectdescription.component';

import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';

export interface Projects{
        projectCode:string ;
        userCode:string ;
        title:string ;
        description:string;
        startDate :string;
        packageCode:string ;
        numberOfRequestedPackages:string ;
        totalAskingFunds:number;
        totalReceivingFunds:number;  
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly endpoint = 'http://localhost:54396/Crowdo/all_projects';
  private readonly endpoint2 = 'http://localhost:54396/Crowdo/update_project';
  constructor(private http: HttpClient) { }
  
  GetAllProjects(): Observable<Projects[]> {    
    return this.http.get<Projects[]>(this.endpoint);  } 
  
  updateproject(project:Projects): Observable<Projects> {    
    return this.http.put<Projects>(this.endpoint2,project);} 
  
}



