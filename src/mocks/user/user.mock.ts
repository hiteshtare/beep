import { User } from './../../models/user/user.model';
import { Messages } from './../../models/messages/messages.model';


const userList: User[] = [new User('Hitesh', 'Tare', 'hitesh@tare.com', '/assets/avatar.png'),
new User('Mukesh', 'Solanki', 'mukesh@solanki.com', '/assets/avatar.png'),
new User('Trupti', 'Tare', 'trupti@tare.com', '/assets/avatar.png'),
new User('Manish', 'Soni', 'manish@soni.com', '/assets/avatar.png')];

export const USER_LIST = userList;
