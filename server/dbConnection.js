// getting-started.js
const mongoose = require('mongoose');


(async()=>{
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.h8e10kb.mongodb.net/test');
        console.log('Connected to DB successfully!!!');
    } catch (error) {
        console.log(error);
    }
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
})()