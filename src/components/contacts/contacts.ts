import { Component } from '@angular/core';
import { Contacts } from 'ionic-native'
import {  ViewController } from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController) {

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
      .catch(
        () =>{
          console.error('No es posible mostrar contactos')
          this.contactsfound = [
            {displayName: "king"},
            {displayName: "no "},
            {displayName: "se"},
            {displayName: "puede"},
            {displayName: "mostrar"},
            {displayName: "contactos"},
          ];
        }
      );
 }

 chooseContact(contact: Contacts){
   console.log("console contact", contact)
   this.viewCtrl.dismiss(contact);
 }

}
