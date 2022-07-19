import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from '../modules/employee';
import { EmployeeserviceService } from '../Service/employeeservice.service';
import { ConnectableObservable, Observable, observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


import { range, filter } from 'rxjs';

@Component({
  selector: 'app-readsampleapi',
  templateUrl: './readsampleapi.component.html',
  styleUrls: ['./readsampleapi.component.css']
})
export class ReadsampleapiComponent implements OnInit {
  title="Employee Details"
  imfo=[]
  
 
  constructor(private http:HttpClient,private emp:EmployeeserviceService,public dialog: MatDialog) { }

  ngOnInit(): void {

    
      this.http.get<any>('https://api.zippopotam.us/us/33162').subscribe(result => {
        console.log(result);
       
        console.log();
        
      });
    }
     
    
  
}
