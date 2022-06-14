import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { PersonService } from '../Service/person.service';
import { UserinputdialogComponent } from '../userinputdialog/userinputdialog.component';



@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  
   title="ADD USER"
//   adduser = this.formBuilder.group({
      
//     firstName: ['ddf'],
//     lastName: ['bhh'],
   
    
// });
//  
  constructor(public dialog: MatDialog, private person:PersonService) { }

  ngOnInit(): void {
  }
//   addusers(data:any){
  
//   console.log()
//   this.users.push({fN:this.adduser.value.firstName,lN:this.adduser.value.lastName})
//   console.log(this.adduser.value.fn);
//   this.adduser.reset();
    
//   }

//   deleteuser(data:any){
//   data=this.users.pop({fN:this.adduser.value.firstName,lN:this.adduser.value.lastName})
//   console.log(data)

//   }
//   modifyuser(data:any){
// this.adduser.value.firstName=data.value.firstName;

//   }
//   openDialog(){
//     this. dialogRef = this.dialog.open(UserComponent, {
//       width: '250px',
//       data: {firstname: this.adduser.value.firstName, lastname: this.adduser.value.firstName},
//     });
//   }
//   closeDialog(){
//     this.dialogRef.close();
//   }
 ContactList=this.person.getAllContacts();


addContact() {
  
  const dialogRef = this.dialog.open(UserinputdialogComponent, {
    data: {}
  });


  dialogRef.afterClosed().subscribe(result => {
   
  });
}

editContact(id: number) {
  
  const contact = this.person.getAllContacts().find(c => c.ID === id);
  const dialogRef = this.dialog.open(UserinputdialogComponent, {
    data: contact
  });


  dialogRef.afterClosed().subscribe(result => {
   
  });
}

deleteContact(id: number) {
  this.person.deleteContact(id);
}
 
}
