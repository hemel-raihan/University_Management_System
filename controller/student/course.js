const express = require('express');
const course = require.main.require('./model/course');
const router = express.Router();


router.get('/',(req,res)=>{
    //if(req.session.uname != null){
    //if(req.cookies['email'] != null){
            
        var data = {
            email: req.session.email
            
        };
        course.courseinfo(data, function(results) {
            req.session.email =  data.email;
            res.render('pages/student/courses', { data: results });
        //});
       // res.render('pages/student/studentDashboard',data);
        });
   
    });


    router.get('/coursedetails/:id',(req,res)=>{

        
        course.coursedetails(req.params.id, function(results) {
        res.render('pages/student/course_details', { data: results });

    });
});



router.get('/registration/:id',(req,res)=>{

    var value = {
        studentemail : req.session.email,
        
     };

    course.courseregistration(req.params.id, function(results) {
    res.render('pages/student/course_registration', { data: results, user: value });

});
});



router.post('/registration/:id', (req, res)=>{
    
	var user = {
        
        courseid: req.body.courseid,
        coursename: req.body.coursename,
        teacher: req.body.teacher,
        studentemail: req.body.studentemail,
        
	};

	course.insert(user, function(status){
		if(status){
            
			res.redirect('/course');
		}else{
			res.redirect('/studentDashboard');
		}
	});
})











module.exports = router;