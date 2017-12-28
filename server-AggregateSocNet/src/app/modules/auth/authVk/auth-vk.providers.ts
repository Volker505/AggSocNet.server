
import {Connection} from 'mongoose'
import {AuthVkSchema} from './schemas/auth-vk.schema';

export const authVkProviders = [{
    provide: 'AuthModelToken',
    useFactory: (connection:Connection) => connection.model('AuthVk', AuthVkSchema),
    inject: ['DbConnectionToken'],
}];