
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
  constructor(private http: HttpClient) { }
  GetAllProjects(): Observable<Projects[]> {    
    return this.http.get<Projects[]>(this.endpoint);  } 
  
}



