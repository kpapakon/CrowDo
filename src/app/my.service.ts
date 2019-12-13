import { User } from './user';
import { ProjectItem } from './project-item';
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyService {

  formData: ProjectItem;
  formData2: User;
  
  constructor() { }
  
}


