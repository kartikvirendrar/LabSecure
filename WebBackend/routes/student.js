const express = require("express");
const { getStudents, addStudent, updateStudent, getStudentById, getStudentActivity } = require("../controllers/student");
const router = express.Router();

router.get("/getStudents", getStudents);
router.post("/addStudent", addStudent);
router.post("/student/update/:id", updateStudent);
router.get("/student/:id", getStudentById);
router.get("/student/activity/:prno", getStudentActivity);
module.exports = router;