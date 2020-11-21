const express = require('express');
const studentskill = require.main.require('./model/studentskill');
const router = express.Router();

/*router.get('/',(req,res)=>{

    res.render('pages/student/student_skill');
});*/


router.get('/',(req,res)=>{
    //if(req.session.uname != null){
    if(req.cookies['email'] != null){
            
        var data = {
            email: req.session.email
            
        };
        studentskill.skillinfo(data, function(results) {
            req.session.email =  data.email;
            res.render('pages/student/student_skill', { data: results });
        });
      
    }
    else{
        res.redirect('/');
    }
    });

    router.get('/skilldetails/:id',(req,res)=>{

        studentskill.skilldetails(req.params.id, function(results) {
        res.render('pages/student/skill_details', { data: results });

    });
});

module.exports = router;