const { AllHoldings, Holdings } = require("../Controllers/HoldingsController");

const router = require("express").Router();

router.get("/", AllHoldings);

router.get("/:uid", Holdings);

module.exports = router;
