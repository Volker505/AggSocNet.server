
export class AuthorizationResponseData{
    token?: string;
    userID?: number;
    expiewsIn?: number;

    constructor(dataObject:{token?:string, userId?:number, expiewsIn?:number}){
        this.token = dataObject.token;
        this.userID = dataObject.userId;
        this.expiewsIn = dataObject.expiewsIn;
    }
}