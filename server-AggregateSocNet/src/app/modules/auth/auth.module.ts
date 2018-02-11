import {Module} from '@nestjs/common';
import {authProviders} from './auth.providers';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {DatabaseModule} from '../../DB/database.module';
import {AuthVkModule} from './authVk/auth-vk.module';
import {AuthVkService} from "./authVk/auth-vk.service";


@Module({
    imports: [
        DatabaseModule,
        AuthVkModule
    ],
    controllers: [AuthController],
    components: [
        AuthService,
        AuthVkService,
        ...authProviders],
    // exports:[
    //     ...authProviders
    // ]
})
export class AuthModule {
}