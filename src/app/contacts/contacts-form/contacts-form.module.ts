import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsFormPageRoutingModule } from './contacts-form-routing.module';

import { ContactsFormPage } from './contacts-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactsFormPageRoutingModule
  ],
  declarations: [ContactsFormPage]
})
export class ContactsFormPageModule {}
