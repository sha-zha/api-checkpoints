const controller = {};
//models
const User = require('../../../models/users');
const Checkpoint = require('../../../models/checkpoint');

controller.index = async (req,res) => {
	const result = await Checkpoint.find().populate('userId').exec();

	return res.status(200).json({
            result
        });
};

controller.show = async (req,res) => {
	const {id} = req.params;
	const result = await Checkpoint.find()
	.populate({ path: 'userId',match : { _id: { $ne: id } } })
	.exec();
	
	return res.status(200).json({
            result
        });
};

module.exports = controller;