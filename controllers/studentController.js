const studentModel = require('../models/studentModel');

const getStudents = async(req,res)=>{
   const students =  await studentModel.find();
    res.json(students);
}
const createStudent= async (req,res)=>{
    try {
        const student = new studentModel(req.body)
        const result = await student.save();
        res.json({message:"student " + req.body.name + " created successfully"});
    }
    catch(err){
        res.json({message:err});
    }
}
const updateStudent= async (req,res)=>{
    try {
        const student = await studentModel.findByIdAndUpdate(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }

}

const getOneStudent = async (req,res)=>{
    try {
        const student = await studentModel.findById(req.params.id);
        res.json(student);
    }
    catch(err){
        res.json({message:err});
    }
   
}

const deleteStudent = async (req,res)=> {
    try {
        const student = await studentModel.findByIdAndDelete(req.params.id);
        res.json({message:"deleted successfully"});
    }
    catch(err){
        res.json({message:err});
    }
   
}

module.exports={
    getStudents,createStudent,getOneStudent,updateStudent,deleteStudent
}