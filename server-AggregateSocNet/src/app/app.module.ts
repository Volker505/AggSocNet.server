import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AuthVkModule} from './modules/auth/authVk/auth-vk.module';
import {MethodaApiModule} from './modules/methodsAPI/methoda-api.module';
import {DatabaseModule} from './DB/database.module';
import {AuthModule} from './modules/auth/auth.module';

@Module({
    imports:[
        AuthModule,
        MethodaApiModule,
        DatabaseModule
    ]
})
export class ApplicationModule{
}