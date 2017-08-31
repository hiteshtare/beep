import { User } from './../user/user.model';

export class Messages {
    constructor(public user: User, public date: Date, public lastMessage: string) {

    }
}