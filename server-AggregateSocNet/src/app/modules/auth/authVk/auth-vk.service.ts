import {Component, Inject} from '@nestjs/common';
import {Model} from 'mongoose';
import * as fetch from 'node-fetch';
import {dataVkApp} from '../../dataVKApp';
import {AuthVk} from './auth-vk.interface';
import {AuthorizationResponseData} from '../dto-auth/authorization-response-data';
import {AuthorizationRequestData} from '../dto-auth/authorization-request-data';


@Component()
export class AuthVkService {
    constructor(@Inject('AuthModelTokenVk') private readonly authVkModel: Model<AuthVk>) {
    }

    async getToken(reqData: AuthorizationRequestData): Promise<{token: number}> {
        //todo
        if (!reqData.token) {
            return await fetch(`${dataVkApp.urlPrefixOuth}access_token?client_id=${dataVkApp.id}&client_secret=${dataVkApp.secret}&redirect_uri=http://localhost:8080/chats&code=${reqData.code}`)
                .then(res => {
                    return res.json();
                }).then(authorizationData => {
                    const dataAuth = new AuthorizationResponseData({
                        token: authorizationData['access_token'],
                        userId: authorizationData['user_id'], expiewsIn: authorizationData['expires_in']
                    });
                    this.authVkModel.create(dataAuth, (err, doc) => {
                        if (err) {
                            // console.log(err);
                            //todo error
                        }
                    });
                    return {token:dataAuth.userID};
                });
        } else {
            let objSerch = await this.authVkModel.findOne({token: reqData.token}, (docs) => {});
            return {token: objSerch.userID};
        }
    }

}