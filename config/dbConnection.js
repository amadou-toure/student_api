const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = 'mongodb+srv://amadou:amadamI0211@cluster0.5tf0knw.mongodb.net/school?retryWrites=true&w=majority'
const connection =()=>{
    try{
        mongoose.connect(connectionString) ? 
        console.log ('db connected successfully') : 
        console.log('not connected !')
    }catch(err){
        console.log(err)
    }
}

module.exports= connection;