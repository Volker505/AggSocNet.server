import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    password:{
        type: String
    },
    userIDVk:{
        type: Number,
        unique: true,
        required: true
    },
    userIDTelegram:{
        type: String
    },
    urlAvatar:{
        type: String
    },
    created:{
        type: Date,
        default: Date.now()
    },
    sex: {
        type: Number
    },
    city:{
        type: String
    }
    // friends:{
    //     type:
    // }
    // expiewsIn: Number
});