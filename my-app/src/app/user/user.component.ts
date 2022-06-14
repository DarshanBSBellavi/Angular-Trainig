import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { signupusers } from '../modules/signupusers'; 


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  title="USERS INFO"
  userinfo:signupusers[]=[];
  
  
  constructor(private userdata:UserService) 
  {
    this.userdata.getuser().subscribe((data)=>{
      this.userinfo=data;
      
     
     console.log(this.userinfo);
           
   })
   

}

}
