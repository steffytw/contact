import { Router, ActivatedRoute } from '@angular/router';
import { ContactService, ContactInfo } from './../contact.service';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit {
  ContactService: any;
  contactForm:FormGroup;
  contactdata:any;
  id:string;
  loaddetails:any;
  
  contacts:any;
  public contactIdvalue:any;

  constructor( private formBuilder: FormBuilder, private service :ContactService,private router : Router,private activatedRoute : ActivatedRoute) { }
  
  update(form: FormGroup) {
    let data = form.value;
    data['id'] = this.contactIdvalue;
    this.service.updateContact(data);
    this.router.navigate(['/contacts']);
  }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {      
      if(!params.has('id')){
        return
      }
      this.contactIdvalue = params.get('id');
      this.loaddetails=this.service.getContactId(this.contactIdvalue);
    });
    this.contactForm = this.formBuilder.group({  
      fname: [this.loaddetails.fname,[Validators.required,Validators.maxLength(100)]],
      lname: [this.loaddetails.lname,[Validators.required,Validators.maxLength(100)]],
      email: [this.loaddetails.email, [Validators.required,Validators.pattern("^[a-zA-Z0-9,%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")]],
      mobilenumber:[this.loaddetails.mobilenumber,[Validators.required,Validators.pattern('[789][0-9]{9}')]],
      category:[this.loaddetails.category,[Validators.required]]
    });
  }

}
