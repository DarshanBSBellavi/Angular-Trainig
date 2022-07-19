import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { signupusers } from '../modules/signupusers'; 

import { EmployeeserviceService } from '../Service/employeeservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  title="USERS INFO"
  userinfo:signupusers[]=[];

  
  
  constructor(private userdata:UserService,private employeedata:EmployeeserviceService) 
  {
    this.userdata.getuser().subscribe((data)=>{
      this.userinfo=data;
      
     
     console.log(this.userinfo);
           
   })
   
// this.employeedata.getallemployees().subscribe(data=>{
// this.employees=data;
// console.log(this.employees)})
// }
  }

}
