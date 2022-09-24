// import {pkg-name} from path
const express = require('express');
const app = express();

const router = require('./routes/router')
const port = 5000;

// parsing the request body
app.use(express.json());

app.use('/route',router);
// app.use('/user',userRouter);
// app.use('/admin',adminRouter);

app.listen(port, () => console.log(`Server started on port ${port}!`))

