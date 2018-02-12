import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: HttpClient, public nativeStorage: NativeStorage, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(user, password) {
    // CHARGEMENT ##################################################
    let loader = this.loadingCtrl.create({
      content: "Chargement...",
    });
    loader.present();

    // POST QUERY ##################################################
    let postParams = {
      email: user,
      pass: password
    }
    const myObjStr = JSON.stringify(postParams);
    this.http.post("https://dylantxa.fr/waar/signup.php", myObjStr)
      .subscribe(data => {
        loader.dismiss();
        console.log("Result : "+data['JSONEXEC']);
        // ICI ON GÈRE LA CONNEXION :)
        // console.log(data.JSONEXEC);
        if(data['JSONEXEC'] == 4) {
          // COMPTE CLIENT OK 
          /*this.nativeStorage.setItem('account', data['DATA']['coiffeurs'])
            .then(
              () => console.log('Stored item!'),
              error => console.error('Error storing item', error)
            );*/
          this.navCtrl.push(TabsPage);
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
        loader.dismiss();
        console.log(error);// Error getting the data
      });
    
  }
}
