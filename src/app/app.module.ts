import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { SignupPage } from '../pages/signup/signup';
import { RestProvider } from '../providers/rest/rest';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ClassementPage } from '../pages/classement/classement';
import { UpgradePage } from './../pages/upgrade/upgrade';
import { AttaquePage } from './../pages/attaque/attaque';
import { JournalPage } from './../pages/journal/journal';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    AttaquePage,
    UpgradePage,
    ClassementPage,
    JournalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    AttaquePage,
    UpgradePage,
    ClassementPage,
    JournalPage
  ],
  providers: [
    StatusBar,
    NativeStorage,
    HttpClientModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
