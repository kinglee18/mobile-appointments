import { Component } from '@angular/core';
import { Contacts } from 'ionic-native'
/*
  Generated class for the Contacts component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'contacts',
  templateUrl: 'contacts.html'
})
export class ContactsComponent {

  text: string;
  contactsfound = [];

  constructor() {
    console.log('Hello Contacts Component');
    this.text = 'Hello World';
  }

  getItems(ev: any ) {
    let value;
    try{
       value = ev.target.value || '';
    }catch(err){
      value = ''
    }

    Contacts
      .find(['name', 'displayName'], {desiredFields: ['emails', 'name'], multiple: true, filter: value})
      .then((contacts) => {
          this.contactsfound = contacts
      })
      .catch(() => console.error('No es posible mostrar contactos'));
 }

}
