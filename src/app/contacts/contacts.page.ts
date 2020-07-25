import { ContactService } from './../contact.service';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
 
})
export class ContactsPage {
  contactinfo:any
  data:any
  friendcategory:any
  familycategory:any
  
  constructor(private service : ContactService,private cf: ChangeDetectorRef) { 
 
  }
  segmentChanged(ev: any) {
    console.log('Segment changed',ev);
    this.cf.detectChanges();  
  }

  ionViewWillEnter(){
    this.contactinfo=this.service.getAllContacts();
    console.log(this.contactinfo)

    this.friendcategory = this.contactinfo.filter(function (person) {
      if (person.category == 'friends') { 
          return person; 
        }
    });
    
    this.familycategory = this.contactinfo.filter(function (person) {
      if (person.category == 'family') { 
          return person; 
        }
    });
   


  }

}
