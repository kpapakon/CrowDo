
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';

export interface User{
        name:string;
        username:string;
        password:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly endpoint = 'http://localhost:54396/Crowdo/login';
  private readonly endpoint2 = 'http://localhost:54396/Crowdo/creators';
  constructor(private http: HttpClient) { }
  login(user:User): Observable<User> {    
    return this.http.post<User>(this.endpoint,user);} 
  GetAllCreators(): Observable<User[]> {    
    return this.http.get<User[]>(this.endpoint);  } 
}
