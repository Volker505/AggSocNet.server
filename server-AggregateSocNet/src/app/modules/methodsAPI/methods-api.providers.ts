
import {Connection} from 'mongoose'
import {UserSchema} from './modelsDB/user/user.schema';

export const methodApiProvider = [{
    provide: 'ApiUserModelToken',
    useFactory: (connection:Connection) => connection.model('ApiUser', UserSchema),
    inject: ['DbConnectionToken'],
}];