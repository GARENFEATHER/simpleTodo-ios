import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeService } from '../providers/home-service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreatePage } from "../pages/create/create";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    [{provide: ErrorHandler, useClass: IonicErrorHandler}, HomeService]
  ]
})
export class AppModule {}
