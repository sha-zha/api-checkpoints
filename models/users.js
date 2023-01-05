const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "employé"
    },
    code : {
    	type : String,
    	required : true,
    	unique :false
    },
},
 { timestamps: true }   
);

module.exports = mongoose.model('users', userSchema);