const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const userSchema = mongoose.Schema({
	UserId: {
    	type: ObjectId,
    	require: true,
    	ref: 'users'
    },
    start : {},
    end : {},

}, 
 { timestamps: true }   
);

module.exports = mongoose.model('checkpoint', userSchema);