const express = require('express');
const studentlogin = require.main.require('./model/studentlogin');
const router = express.Router();

router.get('/',(req,res)=>{
//if(req.session.uname != null){
if(req.cookies['email'] != null){
		
    var data = {
        email: req.session.email
        
    };
    studentlogin.ProfileInfo(data, function(results) {
        req.session.email =  data.email;
        res.render('pages/student/studentDashboard', { data: results });
    });
   // res.render('pages/student/studentDashboard',data);
}
else{
    res.redirect('/studentlogin');
}
});

/*router.get('/showskill',(req,res)=>{
    //if(req.session.uname != null){
    if(req.cookies['email'] != null){
            
        var data = {
            //email: req.session.email,
            email: req.body.email,
        };
        studentlogin.showskill(data, function(results) {
            req.session.email =  data.email;
            res.render('pages/student/showskill', { data: results, });
        });
       // res.render('pages/student/studentDashboard',data);
    }
    else{
        res.redirect('/studentlogin');
    }
    });*/

    router.get('/showskill/:id',(req,res)=>{
        //if(req.session.uname != null){
        if(req.cookies['email'] != null){
            var data = {
                //email: req.session.email,
                email: req.body.email,
            };
           
            studentlogin.showupload(req.params.id, function(results) {
                
                res.render('pages/student/showskill', { value: results, data});
            });
           // res.render('pages/student/studentDashboard',data);
        }
        else{
            res.redirect('/studentlogin');
        }
        });


/*router.post('/', (req, res)=>{
    
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
});*/




module.exports = router;