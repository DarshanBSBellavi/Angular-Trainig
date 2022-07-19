import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service'; 



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  regex1 = new RegExp('[a-z0-9]+@gmail+.[a-z]{2,3}');
  regex2 = new RegExp('[a-z0-9]+@outlook+.[a-z]{2,3}');
   form = this.formBuilder.group({
      
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    userName: [''],
    phoneNumber: [''],
    password: [''],
    confirmPassword: [''],
    
});
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,private users:UserService) 
  { }

  ngOnInit(): void {}

  onSubmit(data:any){
    if (
      this.regex1.test(this.form.value.email) == false &&
      this.regex2.test(this.form.value.email) == false
    ) 
    {
      alert('REGISTERED SUCCESSFULLY');
      this.submitted = true;
      data=this.form.value;
      // this.users.postuser(data).subscribe((response)=>console.log(response),
      // (err)=>console.error(err));
    } else {
      alert("dont use gmail and outlook to Resigered ");
      this.submitted = false;
      this.form.reset();
    }
    
    
    


  }
    
  
  
  

  



}