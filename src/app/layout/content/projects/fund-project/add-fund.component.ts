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
  
  formSubmit(form: FormGroup) {  if (!form.valid) {  return; }  console.log(form.value); }

  UserCodeFormControl=new FormControl("", [Validators.required, Validators.minLength(5)]);
  ProjectCodeFormControl=new FormControl("", [Validators.required, Validators.minLength(3)]);
  PackageCodeFormControl = new FormControl("", [Validators.required, Validators.minLength(5)]);
  
  Arr = Array; //Array type captured in a variable
  num:number = 20;
  fundings: Array<Fundings>;
  constructor(private fundingService: FundingService,private router: Router) { }
  ngOnInit() {
    this.myForm = new FormGroup({  
      Name: this.UserCodeFormControl,
      Address: this.ProjectCodeFormControl,
      Username: this.PackageCodeFormControl,  
      
    });  
    this.UserCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
    this.ProjectCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    }); 
    this.PackageCodeFormControl.valueChanges.subscribe( (value: string) => { // value is the current value 
    });
  
    this.fundingService.AddFund(this.myForm.value).subscribe((i=>this.router.navigate([''])));
  }

}
