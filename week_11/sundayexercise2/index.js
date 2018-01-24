const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));


app.get('/add', function (req, res) {
    const addNum1 = req.query.num1
    const addNum2 = req.query.num2
    console.log("HELLO",addNum1);
    console.log("HELLO 2",addNum2)
    const result = (parseInt(addNum1) + parseInt(addNum2));
    res.send(`Add Number ${result}`);
});


    


app.listen(3000);

// CREATE A CALCULATOR IN A NEW FOLDER CALLED CALC_EXPRESS
// INSTALL EXPRESS AND MORGAN
// THE APP SHOULD HAVE THE FOLLOWING ROUTES
// '/add' WHICH WILL TAKE TWO QUERY PARAMS, ADD THEM TOGETHER, AND SEND THE RESULT TO THE USER
// '/subtract' WHICH WILL TAKE TWO QUERY PARAMS, SUBTRACT THEM TOGETHER, AND SEND THE RESULT TO THE USER
// '/divide' WHICH WILL TAKE TWO ROUTE PARAMS, DIVIDE THEM, AND SEND THE RESULT TO THE USER
// '/multiply' WHICH WILL TAKE TWO ROUTE PARAMS, MULTIPLY THEM TOGETHER, AND SEND THE RESULT TO THE USER