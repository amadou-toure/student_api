const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{required:true ,type:String},
    surname: {required:true ,type:String},
    class: {required:true ,type:String},
    matricule: {required:true ,type:String},
    number:{required:true ,type:Number}
});

const model = mongoose.model('student',studentSchema);

module.exports = model;