import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import {AuthVkService} from './auth-vk.service';
import {AuthorizationRequestData} from './dto-auth-vk/authorization-request-data'

@Controller('auth')
export class AuthVkController{
    constructor(private authVkService: AuthVkService) {}

    @Post('vk')
    async authVkToken(@Body() reqParam:AuthorizationRequestData): Promise<{token: number}>{
        return await this.authVkService.getToken(reqParam);//Observable.of(reqParam);
    }

}