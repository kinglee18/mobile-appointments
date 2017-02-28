import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NgCalendarModule  } from 'ionic2-calendar';
import { AddEventPage } from '../pages/add-event/add-event';
import { ViewEventDetailPage } from '../pages/view-event-detail/view-event-detail';
import {ContactsComponent} from '../components/contacts/contacts';
import {LoginPage} from '../pages/login/login'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddEventPage,
    ViewEventDetailPage,
    ContactsComponent,
    LoginPage
  ],
  imports: [
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddEventPage,
    ViewEventDetailPage,
    ContactsComponent,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
