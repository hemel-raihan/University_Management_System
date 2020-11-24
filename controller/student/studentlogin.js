const express = require('express');
const studentlogin = require.main.require('./model/studentlogin');
const router = express.Router();
const {check, validationResult} = require('express-validator');

router.get('/',(req,res)=>{

    res.render('pages/student/studentlogin',{title: 'Student Login'});
});

/*router.get('/', (req, res)=>{

	studentlogin.getAll(function(results){
		res.render('pages/student/studentlogin', {userlist: results});
	});

});*/



router.post('/',[
	check('email','Invalid Mail').isEmail().normalizeEmail(),
	check('password','Invalid Password').exists().isLength({min:3})
],(req,res)=>{
	var errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid Data");
		console.log(errors);
		const alert = errors.array();

        res.render('pages/student/studentlogin',{alert});
    } else {
    var user = {
		email: req.body.email,
		password: req.body.password,
		
	};

	studentlogin.validate(user, function(status){
		if(status){
			req.session.email =  user.email;
			//req.session.id = user.id
			res.cookie('email', req.body.email);
            //res.redirect('/student_skill');
            res.redirect('/studentDashboard');	
		}else{
			res.redirect('/studentlogin');
		}
	});
	}
	//res.render('login/index');
	//res.redirect('/login');

});



module.exports = router;