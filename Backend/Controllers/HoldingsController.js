const { HoldingModel } = require("../model/HoldingModel");

module.exports.AllHoldings = async (req, res) => {
    const allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
};

module.exports.Holdings = async (req, res) => {
    let { uid } = req.params;
    const allHoldings = await HoldingModel.find({ name: uid });
    res.send(allHoldings.length);
};
