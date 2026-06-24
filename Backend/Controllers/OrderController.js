const { OrderModel } = require("../model/OrderModel");

module.exports.NewOrder = async (req, res) => {
    console.log(req.body);
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved!");
};

module.exports.AllOrders = async (req, res) => {
    const allOrders = await OrderModel.find({});
    res.json(allOrders);
};
