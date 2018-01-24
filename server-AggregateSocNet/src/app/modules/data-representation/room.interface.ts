import {Document} from 'mongoose';
import {MessageInterface} from './message.interface';

export interface RoomInterface extends Document{
    readonly name: string;
    readonly created: Date;
    readonly messages:MessageInterface[],
    readonly lastLetter: Date;//последнее сообщение
}