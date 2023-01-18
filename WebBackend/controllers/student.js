const Student = require("../models/student");
const labdata = require("../models/labdata");

exports.getStudents = async (req, res) => {
  const student= await Student.find();
  res.json(student);  
};

exports.getStudentById = async (req, res) => {
  const {id}=req.params;
  let student = await Student.findById(id);
  res.json(student);
};

exports.addStudent = async (req, res) => {
    try {
      const { name, email, password, prn, branch, division, rollNo, year } = req.body;
      res.json(await new Student({ name, email, password, prn, branch, division, rollNo, year  }).save());
    } catch (err) {
      console.log(err);
      res.status(400).send("Creating Student failed");
    }
};

exports.updateStudent = async (req, res) => {
    try {
      const {id}=req.params;
      const { name, email, password, prn, branch, division, rollNo, year } = req.body;
      res.json(await Student.findByIdAndUpdate(id, {name:name, email:email, password:password, prn:prn, branch:branch, division:division, rollNo:rollNo, year:year}));
    } catch (err) {
      console.log(err);
      res.status(400).send("Updating Student failed");
    }
  };

exports.getStudentActivity = async (req, res) => {
    const {prno} = req.params; 
    let activity = await labdata.find({prn:prno}).exec();
    res.json(activity);
  };