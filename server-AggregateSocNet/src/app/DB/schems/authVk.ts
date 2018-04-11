import * as mongoose from 'mongoose'

export const AuthVkSchema = new mongoose.Schema({
	token: {
		type: String,
		unique: true,
		required: true
	},
	userID:{
		type: Number,
		unique: true,
		required: true
	},
	expiewsIn: Number
});