import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddEventComponent} from '../../components/add-event/add-event';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
