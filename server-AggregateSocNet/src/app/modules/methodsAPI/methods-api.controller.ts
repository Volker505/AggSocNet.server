import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {MethodsApiService} from './methods-api.service';

@Controller('methods')
export class MethodsApiController{
    constructor(private methodsApiService: MethodsApiService) {}

    @Get('infoUser/:token')
    async getInfoUser(@Param() param:{token:number}){
        return await this.methodsApiService.getInfoUser(param.token);
    }

    @Get('getFriendsVk/:token')
    async getFriendsVk(@Param() param:{token:number}){
        return await this.methodsApiService.getFriendsVk(param.token);
    }

}