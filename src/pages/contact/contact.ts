import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Contacts} from 'ionic-native';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contactsfound = [];
  constructor(public navCtrl: NavController) {
    this.findfn()
  
  }

  findfn() {
    Contacts
      .find(['name', 'displayName'], {desiredFields: ['emails', 'name'], multiple: true, filter: ''})
      .then((contacts) => {
          this.contactsfound = contacts
      })
      .catch(() => console.error('No es posible mostrar contactos'));
 }
}
