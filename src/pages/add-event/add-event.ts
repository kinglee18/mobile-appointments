import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AddEvent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html'
})
export class AddEventPage {
  params;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = navParams;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage', this.params);
  }

}
