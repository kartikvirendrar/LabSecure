const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String, required:true
    }, 
    email:{
        type:String, required:true
    },
    password:{
        type:String, required:true
    },
    prn:{
        type:String, required:true
    },
    branch:{
        type:String, required:true
    },
    division:{
        type:String, required:true
    },
    rollNo:{
        type:String, required:true
    },
    year:{
        type:String, required:true
    }
})

module.exports = mongoose.model("user", studentSchema, "user");