import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TabsPage } from './../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: HttpClient, public nativeStorage: NativeStorage, public alertCtrl: AlertController) {

  }

  login(user, password) {
    // CHARGEMENT ##################################################
    let loader = this.loadingCtrl.create({
      content: "Chargement...",
      duration: 1300
    });
    loader.present();

    // POST QUERY ##################################################
    let postParams = {
      email: user,
      pass: password
    }
    const myObjStr = JSON.stringify(postParams);
    this.http.post("https://dylantxa.fr/waar/", myObjStr)
      .subscribe(data => {
        console.log("data : "+data['DATA']['coiffeurs']);
        console.log("Result : "+data['JSONEXEC']);
        // ICI ON GÈRE LA CONNEXION :)
        // console.log(data.JSONEXEC);
        if(data['JSONEXEC'] == 4) {
          // COMPTE CLIENT OK 
          this.nativeStorage.setItem('account', data['DATA']['coiffeurs'])
            .then(
              () => console.log('Stored item!'),
              error => console.error('Error storing item', error)
            );
          //this.navCtrl.push(ChoixcoiffeurPage);
          //console.log("This is ok");
        } else {
          let alert = this.alertCtrl.create({
            title: 'Erreur',
            subTitle: 'Votre email ou mot de passe est invalide ! Merci de rééssayer',
            buttons: ['OK']
          });
          alert.present();
        }
       }, error => {
        console.log(error);// Error getting the data
      });
    
  }

  // Fonction provisoire le temps de faire l'app pour pas se faire chier à se connecter à chaque fois
  redirectionProvisoire() {
    this.navCtrl.setRoot(TabsPage)
  }

}
