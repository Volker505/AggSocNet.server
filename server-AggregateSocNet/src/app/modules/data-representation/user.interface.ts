import {Document} from 'mongoose';
import {RoomInterface} from './room.interface';


export interface UserInterface extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly userIDVk: number;
    readonly userIDTelegram: string;
    readonly userIDFacebook: string;
    readonly urlAvatar: string;
    readonly created: Date;
    readonly sex: number;
    readonly city: string
    readonly friends: UserInterface[];
    readonly rooms: RoomInterface[]
}