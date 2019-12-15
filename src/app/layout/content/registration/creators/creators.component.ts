import { UserService, User } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crowdo-creators',
  templateUrl: './creators.component.html'
})
export class CreatorsComponent implements OnInit {

  Arr = Array; //Array type captured in a variable
  num:number = 20;
  users: Array<User>;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.GetAllCreators().subscribe((data)=>{this.users=data});
  }
}
