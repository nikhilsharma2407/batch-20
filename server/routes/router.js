const express = require('express');

const router = express.Router();




// router.get(path,handler);

router.get('/',(req,res,next)=>{
    console.log(req);
    console.log(req.params);
    console.log(req.query);
    res.status(403);
    res.send('hello world!!!');
});
router.get('/getData/:userId',(req,res,next)=>{
    console.log(req.path);
    console.log(req.params);
    console.log(req.query);
    res.send(`Welcome ${req.params.userId}`);
});

// router.get('/ab?cd',(req,res,next)=>{
//     // match abcd or acd
//     console.log(req.path);
//     res.send('ab?cd');
// });

// wildcard match
router.get('/ab*cd',(req,res,next)=>{
    // match ab{anything} d abcd ab123457cd abXYZcd
    console.log(req.path);
    res.send('ab*cd');
});

router.get('/ab+cd',(req,res,next)=>{
    // match acd or a bbbbb...... cd
    console.log(req.path);
    res.send('ab+cd');
});

router.get('/ab|cd',(req,res,next)=>{
    // match ab or cd
    console.log(req.path);
    res.send('ab|cd');
});

router.get('/.*router$',(req,res,next)=>{
    // match path ending with router, user-router, admin-router
    console.log(req.path);
    res.send('ab|cd');
});

router.post('/signup',(req,res,next)=>{
    console.log("req body",req.body);
    res.send('user created successfully with id '+req.body?.id);
});

// wildcard match
router.all('/*',(req,res,next)=>{
    res.status(404);
    res.send('Invalid path wildcard match')
})

// router.post('/',handler);
// router.put('/',handler);
// router.patch('/',handler);
// router.delete('/',handler);


module.exports = router;