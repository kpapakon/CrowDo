import { FundingService, Fundings } from './../../../../funding.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-get-my-fundings',
  templateUrl: './get-my-fundings.component.html'
})
export class GetMyFundingsComponent implements OnInit {

 
  usercode = localStorage.getItem('userCode');
  constructor(private fundingService: FundingService, private router: Router) { }
  fundings: Array<Fundings>;
  
  ngOnInit() {
    this.fundingService.GetMyFundings(this.usercode).subscribe((data)=>{this.fundings=data});
  }
}
