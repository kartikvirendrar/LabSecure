const express = require("express");
const { getActivity, getActivityById } = require("../controllers/labdata");
const router = express.Router();

router.get("/getActivity", getActivity);
router.get("/getActivityById/:id", getActivityById);
module.exports = router;