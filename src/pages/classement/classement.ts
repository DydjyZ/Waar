import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ClassementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classement',
  templateUrl: 'classement.html',
})
export class ClassementPage {
  userlist: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public Rest: RestProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassementPage');
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    this.Rest.UserList().then(data => {
      console.log("Retour UserList : " + data);
      this.userlist = data;
      loader.dismiss();
    });
  }

}
