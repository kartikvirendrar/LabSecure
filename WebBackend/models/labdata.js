const mongoose = require("mongoose");

const labdata = new mongoose.Schema(
  {
    labNo: {
        type: Number,
        required: true,
    },
    deviceNo: {
      type: Number,
      required: true,
    },  
    loginTime:{
        type: Date,
        required: true,
    },
    logoutTime:{
        type: Date,
        required: true,
    },
    loginImage:{
      type: String,
      required: true,
    },
    logoutIamge:{
        type: String,
        required: true,
    },
  },
);

module.exports = mongoose.model("labdata", labdata, "labdata");