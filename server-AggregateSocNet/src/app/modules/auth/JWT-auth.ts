import * as JWT from 'jsonwebtoken';
import {AuthLoginPasswordDto} from "./dto-auth/auth-login-password.dto";

export class JWTAuth {
    private serkretKey: string = 'iloveASN';

    public async jwtIncode(data: AuthLoginPasswordDto): Promise<AuthLoginPasswordDto> {
        return await JWT.sign(data, this.serkretKey, {algorithm: 'HS256'});
    }

    public async jwtDecode(token: string): Promise<AuthLoginPasswordDto> {
        return await JWT.verify(token, this.serkretKey, (err, decode) => {
            //if (err){}
            return decode;
        });
    }

}