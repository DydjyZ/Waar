import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: any;
  pass: any;
  level: any;
  exp: any;
  constructor(public navCtrl: NavController, public Rest: RestProvider, public nativeStorage: NativeStorage) {

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

} 
