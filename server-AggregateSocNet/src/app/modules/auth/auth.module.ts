import {Module} from '@nestjs/common';
import {authProviders} from './auth.providers';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {DatabaseModule} from '../../DB/database.module';
import {AuthVkModule} from './authVk/auth-vk.module';


@Module({
    modules: [DatabaseModule, AuthVkModule],
    controllers: [AuthController],
    components: [AuthService,
        ...authProviders],
    exports:[
        ...authProviders
    ]
})
export class AuthModule {
}