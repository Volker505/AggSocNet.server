import {Module, NestModule} from '@nestjs/common';
import {MethodsApiController} from './methods-api.controller';
import {MethodsApiService} from './methods-api.service';
import {methodApiProvider} from './methods-api.providers';
import {DatabaseModule} from '../../DB/database.module';
import {AuthVkModule} from '../auth/authVk/auth-vk.module';

@Module({
    modules:[
        DatabaseModule,
        AuthVkModule
    ],
    controllers:[
        MethodsApiController,
    ],
    components:[
        MethodsApiService,
        ...methodApiProvider
    ]
})
export class MethodaApiModule{
}