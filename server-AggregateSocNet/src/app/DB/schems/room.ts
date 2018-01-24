import * as mongoose from 'mongoose'
import {MessageSchema} from './message';

export const RoomSchema = new mongoose.Schema({
    name:{
        type: String
    },
    created:{
        type: Date,
        default: Date.now()
    },
    messages:[MessageSchema],

    lastLetter:{
        type: Date()
    }
});