import { stringify } from '@angular/compiler/src/util';
import { asNativeElements, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';
import { from, fromEvent, Observable, of} from 'rxjs';


@Component({
  selector: 'app-rxjssample',
  templateUrl: './rxjssample.component.html',
  styleUrls: ['./rxjssample.component.css']
})
export class RxjssampleComponent implements OnInit {
  agents: Observable<any>;
  datas:any;
  students:Observable<string[]>=of(['darshan','arun','manju'])
  student:Observable<string[]>=of(['darshanbs'])
  student1={
    id:1,
    name:'darshan'
  }
  studentdata:Observable<any>=of(this.student1)

  @ViewChild('mybutton')
  validate:ElementRef;
  @ViewChild('mylink')
  getlink:ElementRef;
  constructor() { }

  ngOnInit(): void {
    // this.agents=new Observable(observer=>{
    //   try{
    //     setTimeout(()=>{observer.next('darshan');},3000)
    //     setTimeout(()=>{observer.next('Arun');},6000)
    //     setTimeout(()=>{observer.next('manju');},9000)
       
    //     }
        
       
        
       
      
    //   catch(err){
    //     console.error(err)

    //   }
    // })
    // this.agents.subscribe(data=>{
    //   console.log(data)
    //   this.datas=data;
    // })
    this.students.subscribe(data=>{
      console.log(data)
      this.datas=data
    })
    this.student.subscribe(data=>{
      console.log(data)
      this.datas=data
    })
    this.studentdata.subscribe(data=>
        {
          this.datas=JSON.stringify(data);
          console.log(data)
        })
  }
  read()
  {
const buttonObser$=fromEvent(this.validate?.nativeElement,'click');
buttonObser$.subscribe(data=>{
  
})
  }
  mlink(){
    const linkObser=fromEvent(this.getlink?.nativeElement,'mouseover ');
    linkObser.subscribe(data=>
      console.log(data))
    
  }

}




