const labdata = require("../models/labdata");

exports.getActivity = async (req, res) => { 
  let activity = await labdata.find();
  res.json(activity);
};

exports.getActivityById = async (req, res) => {
  const {id}=req.params;
  let activity = await labdata.findById(id);
  res.json(activity);
};