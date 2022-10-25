var express = require('express');

var router = express.Router();



/* GET Computation page. */

router.get('/', function(req,res,next) {

    var num1 = Math.floor(Math.random() * 10);

    var num2 = Math.floor(Math.random() * 10);

    var num3 = Math.floor(Math.random() );

    var num4 = Math.floor(Math.random() * 10);

    var atan2Function = Math.atan2(num1,num2);

    var atanhFunction = Math.atanh(num3);

    var cbrtFunction = Math.cbrt(num4);



    res.render('computation',

    {

        title: 'Ramadevi redrouthu computing functions',

        num1: num1,

        num2: num2,

        num3: num3,

        num4: num4,

        atan2: atan2Function,

        atanh: atanhFunction,

        cbrt: cbrtFunction,

       

     });



    });




    module.exports = router;