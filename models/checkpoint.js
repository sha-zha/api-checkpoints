const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const userSchema = mongoose.Schema({
	UserId: {
    	type: ObjectId,
    	require: true,
    	ref: 'users'
    },
    morning : {
        type: Array,
        require: false
    },
    afternoon : {
        type: Array,
        require: false
    },
}, 
 { timestamps: true }   
);

module.exports = mongoose.model('checkpoint', userSchema);