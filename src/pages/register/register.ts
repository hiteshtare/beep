import { LoginResponse } from './../../models/login/login-response.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  register(event: LoginResponse) {
    if (!event.error) {
      this.toastCtrl.create({
        message: `Account created successfully : ${event.result.email}`,
        duration: 3000
      }).present();
    }
    else {
      this.toastCtrl.create({
        message: `Account not created : ${event.error.message}`,
        duration: 3000
      }).present();
    }
  }

}
