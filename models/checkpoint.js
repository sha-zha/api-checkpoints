const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const userSchema = mongoose.Schema({
	userId: {
    	type: ObjectId,
    	require: true,
    	ref: 'users',
        index:true
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