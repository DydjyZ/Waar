webpackJsonp([5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttaquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AttaquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttaquePage = (function () {
    function AttaquePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AttaquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttaquePage');
    };
    AttaquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attaque',template:/*ion-inline-start:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/attaque/attaque.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button>\n        <!-- bouton option pour accéder aux paramètres du compte -->\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Attaquer un joueur</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- Ici gît un slide dans lequel je pourrai faire preuve de créativité graphique, l\'idée étant d\'afficher les joueurs attaquables dans un décor pertinent et visuellement orgasmique -->\n\n<ion-content no-padding>\n\n\n  <!-- Initialisation des slides -->\n  <ion-slides pager>\n\n    <!-- Slide 1 -->\n    <ion-slide style="background: no-repeat url(\'assets/imgs/bg1.png\'); background-size: contain;">\n\n      <ion-fab top right>\n        <button ion-fab mini>\n          <img src="https://image.noelshack.com/fichiers/2017/24/3/1497456407-icone-one-piece-manga-ico-png-icns-windows-linux-mac.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n      <ion-fab center>\n        <button ion-fab mini>\n          <img src="https://moutonlibre.net/blog/img/a4/avatar-chat.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="right">\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n      <ion-fab right>\n        <button ion-fab mini>\n          <img src="https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="top">\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n    </ion-slide>\n\n    <!-- Slide 2 -->\n\n    <ion-slide style="background: no-repeat    url(\'https://www.actugaming.net/wp-content/uploads/2017/03/test-the-legend-of-zelda-the-minish-cap-nest-taille-compte-7.jpg\'); background-size: 575px 667px;">\n\n      <ion-fab top right>\n        <button ion-fab mini>\n          <img src="https://image.noelshack.com/fichiers/2017/24/3/1497456407-icone-one-piece-manga-ico-png-icns-windows-linux-mac.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n      <ion-fab center>\n        <button ion-fab mini>\n          <img src="https://moutonlibre.net/blog/img/a4/avatar-chat.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="right">\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n      <ion-fab right>\n        <button ion-fab mini>\n          <img src="https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="top">\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n    </ion-slide>\n\n    <!-- Slide 3 -->\n\n    <ion-slide style="background: no-repeat    url(\'https://img15.hostingpics.net/pics/840179landscape2.jpg\'); background-size: 575px 667px;">\n\n      <ion-fab top right>\n        <button ion-fab mini>\n          <img src="https://image.noelshack.com/fichiers/2017/24/3/1497456407-icone-one-piece-manga-ico-png-icns-windows-linux-mac.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n      <ion-fab center>\n        <button ion-fab mini>\n          <img src="https://moutonlibre.net/blog/img/a4/avatar-chat.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="right">\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n      <ion-fab right>\n        <button ion-fab mini>\n          <img src="https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png">\n        </button>\n        <ion-fab-list side="bottom">\n          <button ion-fab>\n            <ion-icon name="hammer"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n          <button ion-fab>\n            <ion-icon name="eye"></ion-icon>\n          </button>\n        </ion-fab-list>\n        <ion-fab-list side="top">\n          <button ion-fab>\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-fab-list>\n      </ion-fab>\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/attaque/attaque.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AttaquePage);
    return AttaquePage;
}());

//# sourceMappingURL=attaque.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClassementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassementPage = (function () {
    function ClassementPage(navCtrl, navParams, Rest, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Rest = Rest;
        this.loadingCtrl = loadingCtrl;
    }
    ClassementPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ClassementPage');
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.Rest.UserList().then(function (data) {
            console.log("Retour UserList : " + data);
            _this.userlist = data;
            loader.dismiss();
        });
    };
    ClassementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classement',template:/*ion-inline-start:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/classement/classement.html"*/'<!--\n  Generated template for the ClassementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button>\n        <!-- bouton option pour accéder aux paramètres du compte -->\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Classement interneuronal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Meilleurs joueurs</h2>\n  <ion-list>\n    <ion-item *ngFor="let item of userlist">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/bg1.png">\n      </ion-thumbnail>\n      <h2> {{ item.email }}</h2>\n      <p>Niveau {{ item.level }}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/classement/classement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ClassementPage);
    return ClassementPage;
}());

//# sourceMappingURL=classement.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, http, nativeStorage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
        this.signupPage = __WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        // ICI J'AI AJOUTÉ ÇA POUR CONNECTER AUTOMATIQIUEMENT LA PERSONNE ############
        var postParams = {
            email: "dylantxa@gmail.com",
            pass: "z24fufc!"
        };
        this.nativeStorage.setItem('account', postParams);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
        // FIN DE LA CONNEXION AUTOMATIQUE ###########################################
    };
    LoginPage.prototype.login = function (user, password) {
        var _this = this;
        // CHARGEMENT ##################################################
        var loader = this.loadingCtrl.create({
            content: "Chargement...",
        });
        loader.present();
        // POST QUERY ##################################################
        var postParams = {
            email: user,
            pass: password
        };
        var myObjStr = JSON.stringify(postParams);
        this.http.post("https://dylantxa.fr/waar/", myObjStr)
            .subscribe(function (data) {
            loader.dismiss();
            console.log("Result : " + data['JSONEXEC']);
            // ICI ON GÈRE LA CONNEXION :)
            // console.log(data.JSONEXEC);
            if (data['JSONEXEC'] == 4) {
                // COMPTE CLIENT OK 
                _this.nativeStorage.setItem('account', postParams);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
                //console.log("This is ok");
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Erreur',
                    subTitle: 'Votre email ou mot de passe est invalide ! Merci de rééssayer',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }, function (error) {
            loader.dismiss();
            console.log(error); // Error getting the data
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Connexion à Bukkake</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="email" placeholder="Votre email" [(ngModel)]="user"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Mot de passe</ion-label>\n    <ion-input type="password" placeholder="Votre mot de passe" [(ngModel)]="password"></ion-input>\n  </ion-item>\n  \n  <button ion-button full (tap)="login(user, password)">CONNEXION</button>\n  \n  <button ion-button full [navPush]="signupPage">INSCRIPTION</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UpgradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpgradePage = (function () {
    function UpgradePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UpgradePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpgradePage');
    };
    UpgradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upgrade',template:/*ion-inline-start:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/upgrade/upgrade.html"*/'<!--\n  Generated template for the UpgradePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button>\n        <!-- bouton option pour accéder aux paramètres du compte -->\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Améliorer votre cerveau</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding>\n    <ion-segment [(ngModel)]="upgrade">\n      <ion-segment-button value="armee">\n        Armée\n      </ion-segment-button>\n      <ion-segment-button value="or">\n        Mine\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="upgrade">\n    <ion-list *ngSwitchCase="\'armee\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://is3.mzstatic.com/image/thumb/Purple69/v4/25/d6/d5/25d6d517-a390-f133-ddc7-46c04e746003/source/256x256bb.jpg">\n        </ion-thumbnail>\n        <ion-range [(ngModel)]="brightness">\n          <ion-icon range-left small name="sunny"></ion-icon>\n          <ion-icon range-right name="sunny"></ion-icon>\n        </ion-range>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'or\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="http://download.seaicons.com/download/i2247/aha-soft/financial/aha-soft-financial-gold-mine.ico">\n        </ion-thumbnail>\n        <ion-range [(ngModel)]="brightness">\n          <ion-icon range-left small name="sunny"></ion-icon>\n          <ion-icon range-right name="sunny"></ion-icon>\n        </ion-range>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <button ion-button>Acheter ces ressources</button>\n  <button ion-button>Faire un QCM pour gagner 10 neurones (3 restants)</button>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/upgrade/upgrade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UpgradePage);
    return UpgradePage;
}());

//# sourceMappingURL=upgrade.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, loadingCtrl, http, nativeStorage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function (user, password) {
        var _this = this;
        // CHARGEMENT ##################################################
        var loader = this.loadingCtrl.create({
            content: "Chargement...",
        });
        loader.present();
        // POST QUERY ##################################################
        var postParams = {
            email: user,
            pass: password
        };
        var myObjStr = JSON.stringify(postParams);
        this.http.post("https://dylantxa.fr/waar/signup.php", myObjStr)
            .subscribe(function (data) {
            loader.dismiss();
            console.log("Result : " + data['JSONEXEC']);
            // ICI ON GÈRE LA CONNEXION :)
            // console.log(data.JSONEXEC);
            if (data['JSONEXEC'] == 4) {
                // COMPTE CLIENT OK 
                /*this.nativeStorage.setItem('account', data['DATA']['coiffeurs'])
                  .then(
                    () => console.log('Stored item!'),
                    error => console.error('Error storing item', error)
                  );*/
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
                //console.log("This is ok");
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Erreur',
                    subTitle: 'Votre email ou mot de passe est invalide ! Merci de rééssayer',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }, function (error) {
            loader.dismiss();
            console.log(error); // Error getting the data
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inscription à Bukkake</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input type="email" placeholder="Votre email" [(ngModel)]="user"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Mot de passe</ion-label>\n    <ion-input type="password" placeholder="Votre mot de passe" [(ngModel)]="password"></ion-input>\n  </ion-item>\n  \n  <button ion-button full (tap)="signup(user, password)">CONNEXION</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/attaque/attaque.module": [
		287,
		4
	],
	"../pages/classement/classement.module": [
		288,
		3
	],
	"../pages/login/login.module": [
		289,
		2
	],
	"../pages/signup/signup.module": [
		290,
		1
	],
	"../pages/upgrade/upgrade.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JournalPage = (function () {
    function JournalPage(navCtrl, Rest, nativeStorage) {
        this.navCtrl = navCtrl;
        this.Rest = Rest;
        this.nativeStorage = nativeStorage;
    }
    // ======
    // Mis en commentaire le temps de faire l'app. Remarque : tu peux ajouter un raccourci permettant de mettre le texte sélectionné en commentaire : fichier - préférences - raccourcis clavier
    // ======
    JournalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad JournalPage');
        this.nativeStorage.getItem('account')
            .then(function (data) {
            console.log("Loading storage");
            _this.email = data['email'];
            _this.pass = data['pass'];
            console.log("Loading storage email : " + _this.email);
            console.log("Email : " + _this.email);
            // REQUETTE HTTP POUR RÉCUPÉRER LES INFOS
            _this.Rest.load(_this.email, _this.pass).then(function (data) {
                console.log("Retour1 : " + data['DATA']['level']);
                _this.level = data['DATA']['level'];
                _this.exp = data['DATA']['exp'];
                _this.or = data['DATA']['or'];
            });
            console.log("Loading storage");
            _this.email = data['email'];
            _this.pass = data['pass'];
            console.log("Loading storage email : " + _this.email);
            console.log("Email : " + _this.email);
            // REQUETTE HTTP POUR RÉCUPÉRER LES INFOS
            _this.Rest.JournalDeBord(_this.email, _this.pass).then(function (data) {
                _this.userlist = data;
            });
        });
    };
    JournalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-journal',template:/*ion-inline-start:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/journal/journal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button>\n        <!-- bouton option pour accéder aux paramètres du compte -->\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Hey you !</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <b>Neu. :</b> {{ or }}\n      </ion-col>\n      <ion-col col-4>\n        <!-- Je mets neurones en attendant (ou or, ou ressources, ou bukkake...) parce que faut voir si les niveaux sont utiles (pourquoi pas) mais en tout cas les ressources c\'est une info capitale -->\n        <b>Niv. :</b> {{ level }}\n      </ion-col>\n      <ion-col col-4>\n        <b>Exp. :</b> {{ exp }}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <h2>Journal de bord</h2>\n\n\n        <ion-card *ngFor="let item of userlist">\n\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="https://image.noelshack.com/fichiers/2017/24/3/1497456407-icone-one-piece-manga-ico-png-icns-windows-linux-mac.png">\n              </ion-avatar>\n              <h2>Marty McFluffy</h2>\n              <p>vous a vaincu</p>\n            </ion-item>\n          \n            <img src="http://nationalinterest.org/files/styles/main_image_on_posts/public/main_images/farley_tank.jpg?itok=ATnES6_K">\n          \n            <ion-card-content>\n                <p> {{ item.phrase }} </p>\n            </ion-card-content>\n          \n            <ion-row>\n              <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="hammer"></ion-icon>\n                  <div>Attaquer en retour</div>\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>Espionner</div>\n                </button>\n              </ion-col>\n              <ion-col center text-center>\n                <ion-note>\n                  {{ item.date | date:"dd/MM/yyyy \'à\' HH:mm" }}\n                </ion-note>\n              </ion-col>\n            </ion-row>\n          \n          </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/journal/journal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], JournalPage);
    return JournalPage;
}());

//# sourceMappingURL=journal.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_rest_rest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_classement_classement__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_upgrade_upgrade__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_attaque_attaque__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_journal_journal__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_attaque_attaque__["a" /* AttaquePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_upgrade_upgrade__["a" /* UpgradePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_classement_classement__["a" /* ClassementPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_journal_journal__["a" /* JournalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/attaque/attaque.module#AttaquePageModule', name: 'AttaquePage', segment: 'attaque', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classement/classement.module#ClassementPageModule', name: 'ClassementPage', segment: 'classement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upgrade/upgrade.module#UpgradePageModule', name: 'UpgradePage', segment: 'upgrade', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_attaque_attaque__["a" /* AttaquePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_upgrade_upgrade__["a" /* UpgradePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_classement_classement__["a" /* ClassementPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_journal_journal__["a" /* JournalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // Pour ne pas se faire chier à se connecter à chaque fois, mettre TabsPage provisoirement
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.load = function (user, password) {
        var _this = this;
        var postParams = {
            email: user,
            pass: password
        };
        var myObjStr = JSON.stringify(postParams);
        return new Promise(function (resolve) {
            _this.http.post("https://dylantxa.fr/waar/info.php", myObjStr)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error); // Error getting the data
                return error;
            });
        });
    };
    RestProvider.prototype.UserList = function () {
        var _this = this;
        var postParams = {
            email: "a",
            pass: "b"
        };
        var myObjStr = JSON.stringify(postParams);
        return new Promise(function (resolve) {
            _this.http.post("https://dylantxa.fr/waar/list.php", myObjStr)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error); // Error getting the data
                return error;
            });
        });
    };
    RestProvider.prototype.JournalDeBord = function (user, password) {
        var _this = this;
        var postParams = {
            email: user,
            pass: password
        };
        var myObjStr = JSON.stringify(postParams);
        return new Promise(function (resolve) {
            _this.http.post("https://dylantxa.fr/waar/journaldebord.php", myObjStr)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error); // Error getting the data
                return error;
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upgrade_upgrade__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attaque_attaque__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__journal_journal__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classement_classement__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__journal_journal__["a" /* JournalPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__attaque_attaque__["a" /* AttaquePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__upgrade_upgrade__["a" /* UpgradePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__classement_classement__["a" /* ClassementPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="3">\n  <ion-tab [root]="tab1Root" tabTitle="Journal du bord" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Attaquer" tabIcon="hammer"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Améliorer" tabIcon="trending-up"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Classement" tabIcon="list-box"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/dylantxa/Desktop/Ionic Projets/Waar2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map