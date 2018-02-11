import {Module} from '@nestjs/common';
import {AuthVkService} from './auth-vk.service';
import {DatabaseModule} from '../../../DB/database.module';
import {AuthModule} from "../auth.module";
import {authProviders} from "../auth.providers";


@Module({
    imports: [DatabaseModule],
    components: [AuthVkService, ...authProviders],
    exports: [AuthVkService,
    ]
})
export class AuthVkModule{
}