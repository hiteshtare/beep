import { Messages } from './../../models/messages/messages.model';
import { USER_LIST } from './../user/user.mock';

const userList = USER_LIST;

// const messageList: Messages[] = [new Messages(userList[0], new Date()),
// new Messages(userList[1], new Date()),
// new Messages(userList[2], new Date()),
// new Messages(userList[3], new Date())];

const messageList: Messages[] = [];

userList.forEach((user) => {
    messageList.push({ user: user, date: new Date(), lastMessage: 'Hello Folks.' })
});

export const MESSAGE_LIST = messageList;
