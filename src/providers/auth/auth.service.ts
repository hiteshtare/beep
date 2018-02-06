import { LoginResponse } from './../../models/login/login-response.model';
import { Account } from './../../models/account/account.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  getAuthenticatedUser() {
    return this.afAuth.authState;
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }
    catch (e) {
      return <LoginResponse>{
        error: e
      }
    }
  }

  async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse>{
        result: this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }
    catch (e) {
      return <LoginResponse>{
        error: e
      }
    }
  }

}

