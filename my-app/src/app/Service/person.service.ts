import { Injectable } from '@angular/core';
import { use } from '../modules/use'; 
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  contactList: use[] = [];
  constructor() { }
  addContact(contact: use) {
    contact.ID = this.contactList.length + 1;
    this.contactList.push(contact);
  }

  editContact(contact: use) {
    const index = this.contactList.findIndex(c => c.ID === contact.ID);
    this.contactList[index] = contact;
  }

  deleteContact(id: number) {
    const contact = this.contactList.findIndex(c => c.ID === id);
    this.contactList.splice(contact, 1);
  }

  getAllContacts() {
    return this.contactList;
  }

}
