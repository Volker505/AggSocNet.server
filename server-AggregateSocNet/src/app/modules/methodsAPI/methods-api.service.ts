import {Component, Inject} from '@nestjs/common';
import * as fetch from 'node-fetch';
import {AuthVk} from '../auth/authVk/auth-vk.interface';
import {Model} from 'mongoose';
import {UserInterface} from './modelsDB/user/user.interface';
import {dataVkApp} from '../dataVKApp';
import {async} from 'rxjs/scheduler/async';
import {AuthorizationResponseData} from '../auth/dto-auth/authorization-response-data';
import {UserData} from './dto-methods-api/user-data.dto';

@Component()
export class MethodsApiService {
  constructor(@Inject('AuthModelTokenVk') private readonly authVkModel: Model<AuthVk>,
              @Inject('ApiUserModelToken') private readonly userApiModel: Model<UserInterface>) {
  }

  async getInfoUser(userIdS: number) {
    let token;
    try {
      token = await this.authVkModel.findOne({userID: userIdS}, (err, data) => {
        if (err)
          throw {message: err, code: 404};
      });
    } catch (err) {
      return console.log('ошибка в базе')
    }
    const userInfo = await this.userApiModel.findOne({userIDVk: userIdS});
    if (userInfo == null) //если пользователя нет то запрос иначе запрос
      return await fetch(`https://api.vk.com/method/users.get?user_id=${userIdS}&access_token=${token.token}&fields=photo_200,city,sex&v=5.62`)
        .then(data => data.json())
        .then(objArrData => objArrData['response'][0])
        .then(infoUser => {
          const dataUserInfo = new UserData({
            id: infoUser.id,
            first_name: infoUser.first_name,
            last_name: infoUser.last_name,
            sex: infoUser.sex,
            photo_200: infoUser.photo_200,
            city: infoUser.city,
          });
          this.userApiModel.create(dataUserInfo, (err, res) => {
            if (err) console.log('create error', err)
          });
          return infoUser;//todo исправить
        });
    return userInfo;
  }

  //todo переделать под метод возврата друзей из чата
  async getFriendsVk(userIdS: number) {
    let token;
    try {
      token = await this.authVkModel.findOne({userID: userIdS}, (err, data) => {
        if (err)
          throw {message: err, code: 404};
      });
    } catch (err) {
      return console.log('ошибка в базе')
    }
    return await fetch(`https://api.vk.com/method/friends.get?user_id=${userIdS}&access_token=${token.token}&order=random&fields=photo_50,city,sex,city&v=5.8`)
      .then(data => {
        return data.json()
      })
      .then(friends => {
        return friends['response'];
      });
  }

}