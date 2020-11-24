const express = require('express');
const studentupload = require.main.require('./model/fileupload');
const router = express.Router();

router.get('/',(req,res)=>{
    //if(req.session.uname != null){
    //if(req.cookies['email'] != null){
            
        var data = {
            email: req.session.email,
            
        };
        studentupload.showskill(data, function(results) {
            req.session.email =  data.email;
            res.render('pages/student/showskill', { data: results });
        });
       // res.render('pages/student/studentDashboard',data);
   // }
   // else{
       // res.redirect('/studentlogin');
    //}
    });





module.exports = router;