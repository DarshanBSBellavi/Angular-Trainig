import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() name:any;
@Input() age:any
@Input() user:any;
@Output() myOutput:EventEmitter<string>= new EventEmitter();  
disticts:string="tumkur";
  constructor() { }

  ngOnInit(): void {
  }
  sendValues(data:string){  
    this.myOutput.emit(data);  
 }  
 
}
