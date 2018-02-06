import { Messages } from './../../models/messages/messages.model';
import { Profile_LIST } from '../profile/profile.mock';

const profileList = Profile_LIST;

const messageList: Messages[] = [];

profileList.forEach((profile) => {
    messageList.push({ profile: profile, date: new Date(), lastMessage: 'Hello Folks.' })
});

export const MESSAGE_LIST = messageList;
