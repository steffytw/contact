import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {
  loaddetails:any
  id: number;
  

  constructor( private service:ContactService,private activatedRoute : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      
      if(!params.has('id')){
        return
      }
      const contactIdvalue = params.get('id');
      this.loaddetails=this.service.getContactId(contactIdvalue);

    });
  }
 

}
