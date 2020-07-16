import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsFormPage } from './contacts-form.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsFormPageRoutingModule {}
