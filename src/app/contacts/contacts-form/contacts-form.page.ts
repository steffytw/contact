import { ContactService } from './../../contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.page.html',
  styleUrls: ['./contacts-form.page.scss'],
})
export class ContactsFormPage implements OnInit {
  ContactService: any;
  contactForm:FormGroup;
  contactdata:any;
  id:string;
  
  contacts:any;

  constructor(private formBuilder: FormBuilder,private service:ContactService,private activatedRoute: ActivatedRoute,private router: Router) { 

  }


  public submit(form: FormGroup) {
    let data = this.contactForm.value;
    this.contacts=this.service.getAllContacts();
    let contactsLength = this.contacts.length;
    data['id'] = (Number(this.contacts[contactsLength-1]['id'])+1).toString();
    this.service.getContacts(data)
    this.router.navigate(['/contacts']);
    console.log(form)

  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
  
      fname: [null,[Validators.required,Validators.maxLength(100)]],
      lname: [null,[Validators.required,Validators.maxLength(100)]],
      email: [null, [Validators.required,Validators.pattern("^[a-zA-Z0-9,%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")]],
      mobilenumber:[null,[Validators.required,Validators.pattern('[789][0-9]{9}')]],
      category:[null,[Validators.required]]
    })
  }

}
