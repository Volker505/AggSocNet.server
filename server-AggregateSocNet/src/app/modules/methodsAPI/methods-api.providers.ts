
import {Connection} from 'mongoose'
import {AuthVkSchema} from "../../DB/schems/authVk";
import {UserSchema} from "../../DB/schems/user";

export const methodApiProvider = [
    {
    provide: 'ApiUserModelToken',
    useFactory: (connection:Connection) => connection.model('ApiUser', UserSchema),
    inject: ['DbConnectionToken'],
}];