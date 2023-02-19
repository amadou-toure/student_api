const express = require('express');
const Student = require('../controllers/studentController');

const route = express.Router();

route.get('/students',Student.getStudents);
route.post('/students',Student.createStudent);
route.get('/students/:id',Student.getOneStudent);
route.put('/students/:id',Student.updateStudent);
route.delete('/students/:id',Student.deleteStudent);


module.exports = route