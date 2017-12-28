import {Module} from '@nestjs/common';
import {AuthVkController} from './auth-vk.controller';
import {AuthVkService} from './auth-vk.service';
import {authVkProviders} from './auth-vk.providers';
import {DatabaseModule} from '../../../DB/database.module';


@Module({
    modules: [DatabaseModule],
    controllers: [AuthVkController],
    components: [AuthVkService,
        ...authVkProviders],
    exports:[
        ...authVkProviders
    ]
})
export class AuthVkModule{
}