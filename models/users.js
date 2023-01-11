const mongoose = require("mongoose");

 /* Function to generate combination of password */
function generateP() {
     var pass = '';
     var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
     for (let i = 1; i <= 8; i++) {
          var char = Math.floor(Math.random()* str.length + 1);
                  
          pass += str.charAt(char)
     }
              
     return pass;
}

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
        required: true,
        default: generateP()
    },
    role: {
        type: String,
        required: true,
        default: "employe"
    },
    code : {
    	type : String,
    	required : true,
    	unique :false
    },
    
    deletedAt: { 
        type : Date,
        required:false,
        default: null
    }
},
 { timestamps: true }   
);

module.exports = mongoose.model('users', userSchema);