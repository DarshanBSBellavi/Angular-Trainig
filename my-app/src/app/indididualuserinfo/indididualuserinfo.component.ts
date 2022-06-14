import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { users } from '../modules/users';

@Component({
  selector: 'app-indididualuserinfo',
  templateUrl: './indididualuserinfo.component.html',
  styleUrls: ['./indididualuserinfo.component.css']
})
export class IndididualuserinfoComponent implements OnInit {
title="USER INFO";
usersid:any;
username:any;
email:any;
phone:any;
pass:any;
conformpass:any;



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.usersid = this.route.snapshot.paramMap.get('id')
    this.username = this.route.snapshot.paramMap.get('userName')
    this.email = this.route.snapshot.paramMap.get('email')
    this.phone = this.route.snapshot.paramMap.get('phoneNumber')
    this.pass = this.route.snapshot.paramMap.get('password')
    this.conformpass = this.route.snapshot.paramMap.get('confirmPassword')
    
// this.route.params.subscribe(data=>console.log(data));

    // this.usersid = this.route.snapshot.queryParamMap.get('id')
    // this.username = this.route.snapshot.queryParamMap.get('name')
    // this.email = this.route.snapshot.queryParamMap.get('email')
    // this.phone = this.route.snapshot.queryParamMap.get('phoneNumber')
    // this.pass = this.route.snapshot.queryParamMap.get('password')
    // this.conformpass = this.route.snapshot.queryParamMap.get('confirmPassword')

    
  }

}
