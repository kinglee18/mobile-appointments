import { Component } from '@angular/core';
import { NavController, NavParams , ModalController} from 'ionic-angular';
import * as moment from 'moment';
import {ContactsComponent } from '../../components/contacts/contacts'
import {SQLite} from 'ionic-native';


@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
  providers:[ContactsComponent]
})

export class AddEventPage {
  params;
  event: any;
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController ) {
    this.params = navParams;
    this.event = {}
    this.event.dateStarts = moment(navParams.get("selectedTime").selectedTime).format('YYYY-MM-DD');
    this.event.timeStarts = moment().format('hh:mm');
  }

  showModal(){
    let profileModal = this.modalCtrl.create(ContactsComponent);
    profileModal.present();
    profileModal.onDidDismiss( data => {
      this.items.push(data);
    })
  }

  bd(){
    let db = new SQLite();
    db.openDatabase({
        name: "data.db",
        location: "default"
    }).then(() => {
        db.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
            console.log("TABLE CREATED: ", data);
        }, (error) => {
            console.error("Unable to execute sql", error);
        })
    }, (error) => {
        console.error("Unable to open database", error);
    });
  }
}
