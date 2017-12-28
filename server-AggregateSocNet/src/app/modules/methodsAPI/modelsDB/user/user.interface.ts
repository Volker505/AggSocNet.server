import {Document} from 'mongoose';

export interface UserInterface extends Document {
    readonly firstName: string;
    readonly lastName?: string;
    readonly password?: string;
    readonly userIDVk: number;
    readonly userIDTelegram?: string;
    readonly urlAvatar?: string;
    readonly created: Date;
    readonly sex?: number;
    readonly city?: string;
}