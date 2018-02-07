import { Profile } from './../../models/profile/profile.model';
import { User } from 'firebase/app';
import { DataService } from './../../providers/data/data.service';
import { AuthService } from './../../providers/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {

  userProfile: Profile;

  loader: Loading;

  constructor(private loadingCtrl: LoadingController, private authService: AuthService, private dataService: DataService) {
    this.loader = this.loadingCtrl.create({
      content: 'Loading profile...'
    });
  }

  ngOnInit(): void {
    this.loader.present();
    this.authService.getAuthenticatedUser().subscribe((user: User) => {
      this.dataService.getProfile(user).subscribe((profile) => {

        this.userProfile = <Profile>profile.val();
        this.loader.dismiss();
      });
    });
  }

}
