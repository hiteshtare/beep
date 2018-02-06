import { Messages } from './../../models/messages/messages.model';
import { Profile } from '../../models/profile/profile.model';

const profileList: Profile[] = [{ firstName: 'Hitesh', lastName: 'Tare', email: 'hitesh@tare.com', avatar: '/assets/avatar.png', dateOfBirth: new Date() },
{ firstName: 'Mukesh', lastName: 'Solanki', email: 'mukesh@solanki.com', avatar: '/assets/avatar.png', dateOfBirth: new Date() },
{ firstName: 'Trupti', lastName: 'Tare', email: 'trupti@tare.com', avatar: '/assets/avatar.png', dateOfBirth: new Date() },
{ firstName: 'Manish', lastName: 'Soni', email: 'manish@soni.com', avatar: '/assets/avatar.png', dateOfBirth: new Date() }];

export const Profile_LIST = profileList;
