import * as mongoose from 'mongoose'
import {UserSchema} from "./user";


export const FriendsSchema = new mongoose.Schema({
    users: {
        type: [UserSchema]
    },
    countFriends: {
        type: Number
    }

});