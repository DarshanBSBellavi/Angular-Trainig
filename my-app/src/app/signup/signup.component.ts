import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Service/api.service';
import { UserService } from '../Service/user.service'; 



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   form = this.formBuilder.group({
      
    email: [''],
    userName: [''],
    phoneNumber: [''],
    password: [''],
    confirmPassword: [''],
    
});
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,private users:UserService) 
  { }

  ngOnInit(): void {}

  onSubmit(data:any){
    data=this.form.value;
    this.users.postuser(data).subscribe((response)=>console.log(response),
    (err)=>console.error(err));
    
    


  }
    
  
  
  

  



}