import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html'
})
export class JournalPage {
  email: any;
  pass: any;
  level: any;
  exp: any;
  or: any;
  constructor(public navCtrl: NavController, public Rest: RestProvider, public nativeStorage: NativeStorage) {

  }

  // ======
  // Mis en commentaire le temps de faire l'app. Remarque : tu peux ajouter un raccourci permettant de mettre le texte sélectionné en commentaire : fichier - préférences - raccourcis clavier
  // ======
  ionViewDidLoad() {
     console.log('ionViewDidLoad JournalPage');
     this.nativeStorage.getItem('account')
       .then(data => {
         console.log("Loading storage");
         this.email = data['email'];
         this.pass = data['pass'];
         console.log("Loading storage email : " + this.email);
         console.log("Email : " + this.email);
         // REQUETTE HTTP POUR RÉCUPÉRER LES INFOS
         this.Rest.load(this.email, this.pass).then(data => {
           console.log("Retour1 : " + data['DATA']['level']);
           this.level = data['DATA']['level'];
           this.exp = data['DATA']['exp'];
           this.or = data['DATA']['or'];
         });
       });
   }

} 
