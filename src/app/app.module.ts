import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoProvider } from '../providers/todo/todo';
import { HttpClientModule } from '@angular/common/http';
import {ArchivedTodosPage} from '../pages/archived-todos/archived-todos';
/*import { HttpClient } from '@angular/common/http';*/
/*import { HttpModule } from "@angular/http";*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArchivedTodosPage
  ],
  imports: [
    /*HttpClient,*/
    /*HttpClient,*/
    /*HttpModule,*/
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArchivedTodosPage
  ],
  providers: [
    StatusBar,
    /*HttpClient,*/
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider
  ]
})
export class AppModule {}
