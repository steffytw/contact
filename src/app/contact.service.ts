import { Injectable } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormControl, FormGroupName, NgForm} from '@angular/forms'

export interface ContactInfo{
  id:string;
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
      id:'1',
      fname:'Stewart',
      lname:'Albert',
      email:'stewart12@gmail.com',
      mobilenumber:'7897897891',
      category: 'friends'
    },
    {
      id:'2',
      fname:'Harly',
      lname:'Quinzel',
      email:'harleen23@gmail.com',
      mobilenumber:'8897897891',
      category: 'family'
    }, 
    {
      id:'3',
      fname:'Eric',
      lname:'Nikson',
      email:'eric45@gmail.com',
      mobilenumber:'9897897891',
      category: 'friends'
    },
     {
      id:'4',
      fname:'Gabrella',
      lname:'Rufus',
      email:'gabri23@gmail.com',
      mobilenumber:'8797897891',
      category: 'friends'
    },
    {
      id:'5',
      fname:'Mehajabeen',
      lname:'Sameera',
      email:'sameera23@gmail.com',
      mobilenumber:'8997897891',
      category: 'family'
    }
  ]
  private  dataContact:ContactInfo[]=[]
  contactForm: any;
  
  getContacts(data:any){

    this.contactData.push(data)
    console.log(this.contactData)
  }

  
  getAllContacts(){
    return [...this.contactData]

  }
  getContactId(contactId:string){
    return {...this.contactData.find(value=>{
      return value.id === contactId;
    })}
  }
  
  constructor() { }

  
}
