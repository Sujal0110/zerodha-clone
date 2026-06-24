const { AllPositions } = require("../Controllers/PositionsController");
const router = require("express").Router();

router.get("/", AllPositions);

module.exports = router;
