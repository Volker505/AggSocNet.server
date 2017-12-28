import {UserInterface} from '../user/user.interface';

export interface FriendsInterface{
    readonly: UserInterface[];
    countFriends?: number;
}