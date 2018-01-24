

export class UserData{
    userName: string;//login
    firstName: string;
    lastName?: string;
    password?: string;
    userIDVk: number;
    userIdFacebook?: string;
    userIdTelegram?: string;
    urlAvatar?: string;
    created: Date;
    sex?: number;
    city: string;
    friends?: UserData[];

    constructor(user: {
        id:number,
        first_name: string,
        last_name: string,
        sex: number,
        city: {id:number,title:string},
        photo_200:string;
    }){
        this.firstName = user.first_name;
        this.lastName = user.last_name;
        this.userIDVk = user.id;
        this.urlAvatar = user.photo_200;
        this.city = user.city.title;
        this.sex = user.sex;
    }
}