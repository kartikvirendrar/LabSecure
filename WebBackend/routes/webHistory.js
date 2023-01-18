const express = require("express");
const { addHistory, viewHistory } = require("../controllers/webdata");
const router = express.Router();

router.post("/addWebHistory", addHistory);
router.post("/viewWebHistory", viewHistory);
module.exports = router;