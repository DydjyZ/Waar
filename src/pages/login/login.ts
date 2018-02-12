import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';
<<<<<<< HEAD:src/pages/home/home.ts
import { RestProvider } from '../../providers/rest/rest';
import { NativeStorage } from '@ionic-native/native-storage';
=======
import { LoadingController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TabsPage } from './../tabs/tabs';
>>>>>>> origin/master:src/pages/login/login.ts

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
<<<<<<< HEAD:src/pages/home/home.ts
export class HomePage {
  email: any;
  pass: any;
  level: any;
  exp: any;
  constructor(public navCtrl: NavController, public Rest: RestProvider, public nativeStorage: NativeStorage) {
=======
export class LoginPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: HttpClient, public nativeStorage: NativeStorage, public alertCtrl: AlertController) {
>>>>>>> origin/master:src/pages/login/login.ts

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.nativeStorage.getItem('account')
    .then(data => { 
      console.log("Loading storage");
      this.email = data['email'];
      this.pass = data['pass'];
      console.log("Loading storage email : "+this.email);
      console.log("Email : " + this.email);
      // REQUETTE HTTP POUR RÉCUPÉRER LES INFOS
      this.Rest.load(this.email, this.pass).then(data => {
        console.log("Retour1 : "+ data['DATA']['level']);
        this.level = data['DATA']['level'];
        this.exp = data['DATA']['exp'];
      });
    });
  }

<<<<<<< HEAD:src/pages/home/home.ts
} 
=======
  // Fonction provisoire le temps de faire l'app pour pas se faire chier à se connecter à chaque fois

}
>>>>>>> origin/master:src/pages/login/login.ts
