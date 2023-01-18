const mongoose = require("mongoose");

const lab = new mongoose.Schema(
  {
    labNo: {
        type: Number,
        required: true,
    },
    deviceNo: {
      type: Number,
      required: true,
    }
  },
);

module.exports = mongoose.model("lab", lab);