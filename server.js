const express = require('express');
require('dotenv').config();
const server = express();
const dbConnection = require('./config/dbConnection');
const studentRoutes= require('./routes/studentRoutes');
const port = process.env.PORT || 5000;

server.use(express.json());
server.use('/api',studentRoutes);
server.listen(port,()=>{
    console.log('server listening on port : '+ port);
});
dbConnection();