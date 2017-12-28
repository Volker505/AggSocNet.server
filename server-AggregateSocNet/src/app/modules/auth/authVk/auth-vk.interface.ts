import { Document } from 'mongoose';

export interface AuthVk extends Document{
    readonly token: string,
    readonly userID: number,
    readonly expiewsIn: number
}