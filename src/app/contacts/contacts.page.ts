import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  providers: [ContactService]
})
export class ContactsPage {

  // contacts: Contact[] =[
  //   {
  //     id: '1',
  //     first_Name: 'Stewart',
  //     last_Name: 'Albert',
  //     imgUrl: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-230288827.jpg',
  //   },
  //   {
  //     id: '2',
  //     first_Name: 'Harly',
  //     last_Name: 'Quinzel',
  //     imgUrl: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-230288827.jpg',
  //   },
  //   {
  //     id: '3',
  //     first_Name: 'Eric',
  //     last_Name: 'Nikson',
  //     imgUrl: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-230288827.jpg',
  //   },

  // ]
  contactinfo:any
  data:any
  
 

  constructor(private service : ContactService,private cf: ChangeDetectorRef) { 

    // this.data=this.service.getContacts

    
  }
  segmentChanged(ev: any) {
    console.log('Segment changed',ev);
    this.cf.detectChanges();
   
  }

  // ngOnInit() {

  //   this.contactinfo=this.service.getAllContacts();
  // }
  ionViewWillEnter(){

    this.contactinfo=this.service.getAllContacts();
    console.log( this.contactinfo )

  }

}
