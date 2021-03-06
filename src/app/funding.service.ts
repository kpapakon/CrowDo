import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Fundings {
  userCode: string;
  projectCode: string;
  packageCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class FundingService {

  private readonly endpoint = 'http://localhost:54396/Crowdo/add_project_funding';
  private readonly endpoint2 = 'http://localhost:54396/Crowdo/myfundings/{usercode}';
  constructor(private http: HttpClient) { }

  AddFund(funding: Fundings): Observable<Fundings> {
    funding.userCode = localStorage.getItem('userCode');
    return this.http.post<Fundings>(this.endpoint, funding);
  }

  GetMyFundings(usercode:string):Observable<Fundings[]>{
    return this.http.get<Fundings[]>(this.endpoint2 + usercode);
  }
  
}
