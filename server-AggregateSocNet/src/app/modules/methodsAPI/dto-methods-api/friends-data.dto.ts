import {UserData} from './user-data.dto';


export class FriendsDataDto {
    friends: UserData[];

    constructor(friends: {
        id: number,
        first_name: string,
        last_name: string,
        sex: number,
        city: { id: number, title: string },
        photo_50: string;
    }[]) {
        friends.forEach(friend => this.friends.push())
    }
}