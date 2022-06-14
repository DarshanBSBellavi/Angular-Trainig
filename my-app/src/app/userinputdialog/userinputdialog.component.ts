import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PersonService } from '../Service/person.service';
@Component({
  selector: 'app-userinputdialog',
  templateUrl: './userinputdialog.component.html',
  styleUrls: ['./userinputdialog.component.css']
})
export class UserinputdialogComponent implements OnInit {

   contactForm: any;

  constructor(private _formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<UserinputdialogComponent>,
  private person: PersonService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }





  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      ID: [this.data.ID],
      FirstName: [ this.data.FirstName],
      LastName: [ this.data.LastName],
      
    });
  }

  onSubmit() {
    if (isNaN(this.data.ID)) {
      this.person.addContact(this.contactForm.value);
      this.dialogRef.close();
    } else {
      this.person.editContact(this.contactForm.value);
      this.dialogRef.close();
    }
  }

}
