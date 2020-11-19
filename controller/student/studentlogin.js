const express = require('express');
const studentlogin = require.main.require('./model/studentlogin');
const router = express.Router();

router.get('/',(req,res)=>{

    res.render('pages/student/studentlogin',{title: 'Student Login'});
});

/*router.get('/', (req, res)=>{

	studentlogin.getAll(function(results){
		res.render('pages/student/studentlogin', {userlist: results});
	});

});*/



router.post('/',(req,res)=>{
    var user = {
		email: req.body.email,
		password: req.body.password,
		
	};

	studentlogin.validate(user, function(status){
		if(status){
			req.session.email =  user.email;
			//req.session.id = user.id
			//res.cookie('uname', req.body.username);
            //res.redirect('/student_skill');
            res.redirect('/studentDashboard');	
		}else{
			res.redirect('/studentlogin');
		}
	});

	//res.render('login/index');
	//res.redirect('/login');

});



module.exports = router;