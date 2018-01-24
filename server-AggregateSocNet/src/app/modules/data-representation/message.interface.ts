import {Document} from 'mongoose';


export interface MessageInterface extends Document{
    readonly created: Date;
    readonly message: string;
    readonly nameUser: string;
}