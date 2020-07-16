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
  contactForm:FormGroup
  contactdata:any;
  // public errorMessages = {
  //   fname: [
  //     { type: 'required', message: 'First Name is required' },
  //     { type: 'maxlength', message: 'First Name cant be longer than 100 characters' }
  //   ],
  //   lname: [
  //     { type: 'required', message: 'Last Name is required' },
  //     { type: 'maxlength', message: 'Last Name cant be longer than 100 characters' }
  //   ],
  //   email: [
  //     { type: 'required', message: 'Email is required' },
  //     { type: 'pattern', message: 'Please enter a valid email address' }
  //   ],
  //   mobilenumber: [
  //     { type: 'required', message: 'Mobile number is required' },
  //     { type: 'pattern', message: 'Please enter a valid Mobile number' }
  //   ],
  //   category: [
  //     { type: 'required', message: 'Group is required' },
  //     { message: 'Please select any one Group' }
  //   ]
  // }

    
  

  constructor(private formBuilder: FormBuilder,private service:ContactService,private activatedRoute: ActivatedRoute,private router: Router) { }


  public submit(form: FormGroup) {
    
    // this.service.getContacts(form.value.fname,form.value.lname,form.value.email,form.value.mobilenumber,form.value.category)
    // JSON.stringify(this.contactForm.value)
    
    this.service.getContacts(this.contactForm.value)
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
