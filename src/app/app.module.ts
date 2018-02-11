import { AttaquePage } from './../pages/attaque/attaque';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ClassementPage } from '../pages/classement/classement';
import { UpgradePage } from '../pages/upgrade/upgrade';
import { JournalPage } from '../pages/journal/journal';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    ClassementPage,
    UpgradePage,
    JournalPage,
    AttaquePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    ClassementPage,
    UpgradePage,
    JournalPage,
    AttaquePage
  ],
  providers: [
    StatusBar,
    NativeStorage,
    HttpClientModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
