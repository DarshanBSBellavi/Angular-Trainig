import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  inputname='';
  inputage='';
  userinfo={"inputname":" ","inputage":" "}
  constructor() { }

  ngOnInit(): void {
  }

  transfer(name:any,age:any){
//  this.inputage=age;
//  this.inputname=name;
 this.userinfo={"inputname":name,"inputage":age}
  }
  GetChildData(data:any){  
    console.log(data);
    this.inputage=data;  }
 }  

