import { Profile } from "../profile/profile.model";

export interface Messages {
    profile: Profile;
    date: Date;
    lastMessage: string;
}