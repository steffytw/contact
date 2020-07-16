import { Injectable } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormControl, FormGroupName, NgForm} from '@angular/forms'

export interface ContactInfo{
  fname:string;
  lname:string;
  email:string;
  mobilenumber:string;
  category:string

}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private  contactData:ContactInfo[]=[
    {
      fname:'Stewart',
      lname:'Albert',
      email:'ericj12@gmail.com',
      mobilenumber:'7897897891',
      category: 'friends'
    },
    {
      fname:'Harly',
      lname:'Quinzel',
      email:'harleen23@gmail.com',
      mobilenumber:'8897897891',
      category: 'family'
    }, 
    {
      fname:'Eric',
      lname:'Nikson',
      email:'rebaccasa@gmail.com',
      mobilenumber:'9897897891',
      category: 'friends'
    },
     {
      fname:'Gabrella',
      lname:'Rufus',
      email:'gabri23@gmail.com',
      mobilenumber:'8797897891',
      category: 'friends'
    },
    {
      fname:'Mehajabeen',
      lname:'Sameera',
      email:'harleen23@gmail.com',
      mobilenumber:'8997897891',
      category: 'family'
    }
  ]
  private  dataContact:ContactInfo[]=[]
  contactForm: any;
  
  getContacts(data:any){

    this.contactData.push(data)
    console.log(this.contactData)
  
    // this.contactData.push({fname:fname,lname:lname,email:email,mobilenumber:mobilenumber,category:category})
  }

  
  getAllContacts(){
    return [...this.contactData]

  }
  
  constructor() { }

  
}
