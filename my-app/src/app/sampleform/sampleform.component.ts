import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { sampleusers } from '../modules/sampleusers';
import { ApiService } from '../Service/api.service';

 
@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {

  
  sample:any;
  savesample:any=[]
  constructor(private fb: FormBuilder,private samuse:ApiService) { }

  ngOnInit(): void {
    this.sample=this.fb.group({
      userName:[''],
      email:[''],
      phoneNumber:[''],
      password:[''],
      location:['']
      
    })
  }

  save(sampleform:sampleusers){
   
   console.log(sampleform)
   this.savesample.push(sampleform)

   
  }
  delete(sampleform:sampleusers){
    console.log(sampleform)
    this.savesample.splice(sampleform,1)

  }
  update(sampleform:sampleusers){
    this.savesample.splice(sampleform,1)
    this.sample=this.fb.group({
      userName:[this.sample.value.userName],
      email:[this.sample.value.email],
      phoneNumber:[this.sample.value.userName],
      password:[this.sample.value.phoneNumber],
      location:[this.sample.value.location]
    })
    

    this.savesample.push(sampleform)

}
}