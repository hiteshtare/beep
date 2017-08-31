import { AuthService } from './../../providers/auth/auth.service';
import { LoginResponse } from './../../models/login/login-response.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from './../../models/account/account.model';
import { NavController, ToastController } from 'ionic-angular';
import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth,private authService: AuthService) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    const loginResponse = await this.authService.createUserWithEmailAndPassword(this.account);
    this.registerStatus.emit(loginResponse);
  }
}
