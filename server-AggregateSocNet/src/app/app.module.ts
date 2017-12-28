import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AuthVkModule} from './modules/auth/authVk/auth-vk.module';
import {MethodaApiModule} from './modules/methodsAPI/methoda-api.module';
import {DatabaseModule} from './DB/database.module';

@Module({
    modules:[
        AuthVkModule,
        MethodaApiModule,
        // DatabaseModule
    ]
})
export class ApplicationModule{
}