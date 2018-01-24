import {Connection} from 'mongoose';
import {UserSchema} from '../../DB/schems/user';
import {AuthVkSchema} from '../../DB/schems/authVk';

export const authProviders = [{
    provide: 'AuthModelTokenVk',
    useFactory: (connection: Connection) => connection.model('AuthVk', AuthVkSchema),
    inject: ['DbConnectionToken'],
},
    {
        provide: 'AuthModelTokenLogin',
        useFactory: (connection: Connection) => connection.model('Auth', UserSchema),
        inject: ['DbConnectionToken'],
    }
];