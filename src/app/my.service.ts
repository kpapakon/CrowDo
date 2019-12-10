import { ProjectItem } from './project-item';
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';


export interface Customer {  
  fisrtName: string;  
  lastName: string; 
}

@Injectable({
  providedIn: 'root'
})
export class MyService {

  formData: ProjectItem;
  constructor() { }
  
}


