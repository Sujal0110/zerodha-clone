const { PositionModel } = require("../model/PositionModel");

module.exports.AllPositions = async (req, res) => {
    const allPositions = await PositionModel.find({});
    res.json(allPositions);
};
