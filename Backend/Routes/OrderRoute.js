const { NewOrder } = require("../Controllers/OrderController");
const { AllOrders } = require("../Controllers/OrderController");
const router = require("express").Router();

router.post("/newOrder", NewOrder);
router.get("/allOrders", AllOrders);

module.exports = router;
