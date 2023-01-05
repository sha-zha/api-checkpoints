const Checkpoint = require('../../../models/checkpoint');
const controller = {}; 

controller.index = async (req,res) => {
  try {
        const checkpoints = await Checkpoints.find();
        res.status(200).json({
            checkpoints
        });
    } catch (error) {
        res.status(400).json({
            result: "error"
        });
    }
};

controller.show = async(req,res) =>{

};

controller.store = async (req,res) => {
	
};

controller.update = async (req,res) => {
	
};

controller.delete =async (req,res) => {
	
};

module.exports = controller;