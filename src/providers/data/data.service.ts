import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.model';
import 'rxjs/add/operator/take';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataService {

  public profileObject: FirebaseObjectObservable<Profile>;

  constructor(private afDb: AngularFireDatabase) {
  }

  // const profiles = [{
  //   'u-uid1': {
  //     firstName: 'Hitesh',
  //     lastName: 'Tare'
  //   }
  // }];
  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.afDb.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    }
    catch (e) {
      console.log(e);
      return false;
    }
  }

  getProfile(user: User) {
    this.profileObject = this.afDb.object(`/profiles/${user.uid}`, { preserveSnapshot: true });

    return this.profileObject.take(1);
  }

}
