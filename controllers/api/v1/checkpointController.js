const User       = require('../../models/users');
const controller = {}; 

controller.show = async (req,res) => {
  try {
        const users = await User.find().select('email');
        res.status(200).json({
            users
        });
    } catch (error) {
        res.status(400).json({
            result: "error"
        });
    }
};

controller.create = async (req,res) => {
	
};

controller.update = async (req,res) => {
	
};

controler.delete =async (req,res) => {
	
};

module.exports = controller;