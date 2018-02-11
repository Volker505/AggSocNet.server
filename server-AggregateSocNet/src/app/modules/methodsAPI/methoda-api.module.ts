import {Module, NestModule} from '@nestjs/common';
import {MethodsApiController} from './methods-api.controller';
import {MethodsApiService} from './methods-api.service';
import {methodApiProvider} from './methods-api.providers';
import {DatabaseModule} from '../../DB/database.module';
import {AuthVkModule} from '../auth/authVk/auth-vk.module';
import {authProviders} from "../auth/auth.providers";

@Module({
    imports:[DatabaseModule],
    controllers:[MethodsApiController],
    components:[
        MethodsApiService,
        ...methodApiProvider,
        ...authProviders
    ],

})
export class MethodaApiModule{
}