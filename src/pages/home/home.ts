import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { NavController, NavParams } from 'ionic-angular';
import {AddEventPage} from '../add-event/add-event';
import {ViewEventDetailPage} from '../view-event-detail/view-event-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calendar: any
  eventSource: Array<any>
  viewTitle: string
  isToday: boolean;
  selectedTime:string;

  addEventPage = AddEventPage;
  ViewEventDetailPage = ViewEventDetailPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.calendar = {
      mode: 'month',
      currentDate : new Date()
    }
    this.eventSource = [{
      title: "meeting",
      startTime: new Date(2016, 11, 2),
      endTime: new Date(2017,11, 5),
      allDay: true,
      "id":2,
      contact:{
        displayName:2
      }
    }]

  }

  onViewTitleChanged(title) {
       this.viewTitle = title;
   }

  onEventSelected = (event) => {
      this.navCtrl.push(this.ViewEventDetailPage,{"event":event});

  };

  onCurrentDateChanged(event:Date) {
        console.log("console on current")
       var today = new Date();
       today.setHours(0, 0, 0, 0);
       event.setHours(0, 0, 0, 0);
       this.isToday = today.getTime() === event.getTime();
   }

   onTimeSelected = (selectedTime, events, disabled, elem) => {
     this.selectedTime = selectedTime;
   };

   addEvent(){
     console.log("console ", this.isToday )
     this.navCtrl.push(this.addEventPage,{selectedTime:this.selectedTime});
   }

}
