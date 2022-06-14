import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pswd=1234;
  usname="darshan";
  formval:any;


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,private users:UserService,
    private router:Router) 
  { }

  ngOnInit(): void {
  }
  loginform = this.formBuilder.group({
        
    userName: ['darshan'],
    password: [1234],
    
    
});
onSubmit(){
  if(this.pswd === this.loginform.value.password && this.usname === this.loginform.value.userName)


  {
  alert("success")
  this.router.navigate(['/adduser'],{ })
  .then(nav => {
    console.log(nav); // true if navigation is successful
  }, err => {
    console.log(err) // when there's an error
  });
    
  }
  else
  {
    alert("unsuccess")
      
    }
  
}
}