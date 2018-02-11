
import {Connection} from 'mongoose'
import {UserSchema} from './modelsDB/user/user.schema';
import {AuthVkSchema} from "../../DB/schems/authVk";

export const methodApiProvider = [
    {
    provide: 'ApiUserModelToken',
    useFactory: (connection:Connection) => connection.model('ApiUser', UserSchema),
    inject: ['DbConnectionToken'],
}];