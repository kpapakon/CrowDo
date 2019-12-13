import { User } from './user';
import { ProjectItem } from './project-item';
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyService {

  private readonly endpoint = 'http://localhost:54396/Crowdo/login';
  constructor(private http: HttpClient) { }
  Login(user: User): Observable<any> {    
    return this.http.post<any>(this.endpoint, user);  } 
  
}


