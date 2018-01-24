import {Module} from '@nestjs/common';
import {AuthVkService} from './auth-vk.service';
import {DatabaseModule} from '../../../DB/database.module';


@Module({
    modules: [DatabaseModule],
    components: [AuthVkService],
})
export class AuthVkModule{
}