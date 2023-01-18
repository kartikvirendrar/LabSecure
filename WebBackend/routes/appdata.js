const express = require("express");
const { addAppHistory, viewAppHistory } = require("../controllers/appdata");
const router = express.Router();

router.post("/addAppHistory", addAppHistory);
router.post("/viewAppHistory", viewAppHistory);
module.exports = router;