import { Fundings, FundingService } from './../../../../funding.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-fund-project',
  templateUrl: './add-fund.component.html'
})
export class FundProjectComponent implements OnInit {

  myForm: FormGroup;

  formSubmit() {  
    if (!this.myForm.valid) {  
      return; 
    }  

    this.fundingService.AddFund(this.myForm.value).subscribe();
    console.log(this.myForm.value); 
  }
  constructor(private fundingService: FundingService,private router: Router) { }


  ngOnInit() {

    const userCode = localStorage.getItem('userCode');

    if (!userCode) {
      this.router.navigate(['login']);
      return;
    }

    this.myForm = new FormGroup({  
      packageCode: new FormControl("", [Validators.required]),
      projectCode: new FormControl("", [Validators.required]),  
    });  

  }

}
