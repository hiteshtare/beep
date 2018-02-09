import { Profile } from './../../models/profile/profile.model';
import { DataService } from './../../providers/data/data.service';
import { Component } from '@angular/core';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {

  query: string;

  constructor(private dataService: DataService) {

  }

  profileList: Profile[]

  searchUser(query: string) {
    this.dataService.searchUser(query).subscribe((profiles) => {
      this.profileList = profiles;
    });
  }

}
