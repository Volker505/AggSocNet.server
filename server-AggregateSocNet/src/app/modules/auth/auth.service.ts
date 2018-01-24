import {AuthVk} from './authVk/auth-vk.interface';
import {Component, Inject} from '@nestjs/common';
import {Model} from 'mongoose';
import {AuthLoginPasswordDto} from './dto-auth/auth-login-password.dto';
import {UserInterface} from '../data-representation/user.interface';

@Component()
export class AuthService {

    constructor(@Inject('AuthModelTokenVk') private readonly authVkModel: Model<AuthVk>,
                @Inject('AuthModelTokenLogin') private readonly authLoginModel: Model<UserInterface>) {
    }

    async authLogin(loginPassword: AuthLoginPasswordDto): Promise<{ token: string }> {

    }
}