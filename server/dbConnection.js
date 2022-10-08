// getting-started.js
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;
(async()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to DB successfully!!!');
    } catch (error) {
        console.log(error);
    }
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
})()