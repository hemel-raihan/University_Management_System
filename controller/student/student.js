const express = require('express');
const student = require.main.require('./model/student');
const router = express.Router();

router.get('/:id',(req,res)=>{
    //if(req.session.uname != null){
    //if(req.cookies['email'] != null){
            
        var data = {
            studentid: req.params.id
            
        };
        student.studentinfo(data, function(results) {
           
            res.send(JSON.stringify(results));
        });
       // res.render('pages/student/studentDashboard',data);
   // }
   // else{
       // res.redirect('/studentlogin');
    //}
    });





module.exports = router;