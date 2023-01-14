const Checkpoint = require('../../../models/checkpoint');
const controller = {}; 

controller.index = async (req,res) => {
  try {
        const checkpoints = await Checkpoint.find();
        res.status(200).json({
            checkpoints
        });
    } catch (error) {
        res.status(400).json({
            result: "error"
        });
    }
};


controller.show = async (req,res) => {
const { id } = req.params;
    try {
        const checkpoint = await Checkpoint.findById(id);
        if (!checkpoint) {
            return res.status(400).json({
                result: "error",
                message: "utilisateur non trouvé"
            });
        };
        res.status(200).json({
            checkpoint
        });
    } catch (error) {
        res.status(400).json({
            result: "error",
            message: error
        });
    }
};

controller.store = async (req,res) => {
	const {userId,morning,afternoon} = req.body;

    const checkpoint = new Checkpoint({ 
        userId,morning,afternoon
    });
  
    const ressult = await Checkpoint.create(req.body);

    res.status(201).json({
            success: true,
            message: "Le pointage a bien été ajouté !"
        });
        return ressult;
};

controller.update = async (req,res) => {
	const {userId,morning,afternoon} = req.body;

    const checkpoint = {
        userId : userId,
        morning : morning,
        afternoon: afternoon
    };

    const ressult = await Checkpoint.findOneAndUpdate(req.params.id, checkpoint, {
        returnOriginal: false
    });

 res.status(201).json({
            success: true,
            message: "Le pointage a bien été modifié !"
        });
        return ressult;
    
};

controller.delete =async (req,res) => {
    const id = req.params.id;
    const result = await Checkpoint.deleteOne({ _id: id });

    res.status(200).json({
        success:true,
        message:"Le pointage a bien été supprimé"
    });
};

module.exports = controller;