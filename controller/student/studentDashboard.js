const express = require('express');
const studentlogin = require.main.require('./model/studentlogin');
const router = express.Router();

router.get('/',(req,res)=>{
//if(req.session.uname != null){
//if(req.cookies['uname'] != null){
		
    var data = {
        email: req.session.email
        
    };
    studentlogin.ProfileInfo(data, function(results) {
        res.render('pages/student/studentDashboard', { data: results });
    });
   // res.render('pages/student/studentDashboard',data);

});




/*router.get('/', (req, res)=>{

    var name=
    {
        name: req.session.uname
    }
    studentlogin.getByName(name, function(results) {
        res.redirect('/studentDashboard', {
            user: results
        });
    });
	
	
});*/




router.post('/', (req, res)=>{
    
	var user = {
        
        post: 	req.body.post,
        email: req.session.email,
        id: req.body.id,
	};

	studentlogin.insert(user, function(status){
		if(status){
            
            req.session.email = user.email;
			res.redirect('/studentDashboard');
		}else{
			res.redirect('/studentDashboard');
		}
	});
})





module.exports = router;