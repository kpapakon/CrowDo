
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';

export interface User{
        username:string;
        password:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly endpoint = 'http://localhost:54396/Crowdo/login';
  constructor(private http: HttpClient) { }
  login(user:User): Observable<User> {    
    return this.http.post<User>(this.endpoint,user);} 
  
}
