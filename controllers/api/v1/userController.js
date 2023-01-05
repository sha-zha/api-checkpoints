const path        = require('path');
const controller = {}; 
const User = require('../../../models/users');

controller.index = async (req,res) => {
	try {
        const users = await User.find();
        res.status(200).json({
            users
        });
    } catch (error) {
        res.status(400).json({
            result: "error"
        });
    }
};

controller.show = async (req,res) => {
const { id } = req.params
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({
                result: "error",
                message: "utilisateur non trouvé"
            });
        };
        res.status(200).json({
            user
        });
    } catch (error) {
        res.status(400).json({
            result: "error",
            message: error
        });
    }
};

controller.store = async (req,res) => {
	const {firstname,lastname,email,password,role,code} = req.body;

	const user = new User({	
		firstname,
    	lastname,
    	email,
    	password,
    	role,
    	code,
	});
  
const ressult = await User.create(req.body);
     
     res.status(201).json({
            success: true,
            message: "L'utilisateur a bien été ajouté !"
        });
        return ressult;
};

controller.update = async (req,res) => {
const {firstname,lastname,email,password,role,code} = req.body;

	const user = {	
		firstname: firstname,
    	lastname: lastname,
    	email: email,
    	password: password,
    	role: role,
    	code: code,
	};
  
const ressult = await User.findOneAndUpdate(req.params.id, user, {
  returnOriginal: false
});;

 res.status(201).json({
            success: true,
            message: "L'utilisateur a bien été modifié !"
        });
        return ressult;
	
};

controller.delete =async (req,res) => {
	const {id} = req.params.id;

	
	res.status(200).json({
		success:true,
		message:"L'utilisateur a bien été supprimé"
	});
};

module.exports = controller;