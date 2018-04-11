import {AuthVkService} from './authVk/auth-vk.service';
import {Body, Controller, Post, Headers} from '@nestjs/common';
import {AuthorizationRequestData} from './dto-auth/authorization-request-data';
import {AuthLoginPasswordDto} from './dto-auth/auth-login-password.dto';
import {AuthService} from './auth.service';
import {JWTAuth} from "./JWT-auth";

@Controller('auth')
export class AuthController {

    private jwtAuth: JWTAuth = new JWTAuth();


    constructor(private authVkService: AuthVkService,
                private authService: AuthService) {
    }

    @Post('vk')
    async authVkToken(@Body() reqParam: AuthorizationRequestData): Promise<{ token: number }> {
        return await this.authVkService.getToken(reqParam);
    }

    @Post('login')
    async authLogPass(@Body() reqParam: AuthLoginPasswordDto) {//Promise<{token: string}>
        return await this.authService.authLogin(reqParam);
    }

    // @Post('ht')
    // async foo(@Body() paran: { token: string }, @Headers() head: any) {
    //     //return head.authorization;
    //     return await this.jwtAuth.jwtDecode(paran.token);
    // }

}