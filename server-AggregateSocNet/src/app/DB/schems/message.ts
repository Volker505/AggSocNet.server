import * as mongoose from 'mongoose'

export const MessageSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    message:{
        type:String
    },
    nameUser:{
     type: String
    }
});