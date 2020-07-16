import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactsFormPage } from './contacts-form.page';

describe('ContactsFormPage', () => {
  let component: ContactsFormPage;
  let fixture: ComponentFixture<ContactsFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
