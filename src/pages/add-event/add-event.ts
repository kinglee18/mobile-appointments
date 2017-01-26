import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Moment from 'moment'
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
  event: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = navParams;
    this.event = {}
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage', this.params);
  }

}
