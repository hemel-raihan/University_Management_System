const express = require('express');
const notice = require.main.require('./model/notice');
const router = express.Router();

router.get('/:id',(req,res)=>{
    //if(req.session.uname != null){
    //if(req.cookies['email'] != null){
            
        var data = {
            courseid: req.params.id
            
        };
        notice.noticeinfo(data, function(results) {
           
            res.send(JSON.stringify(results));
        });
       // res.render('pages/student/studentDashboard',data);
   // }
   // else{
       // res.redirect('/studentlogin');
    //}
    });





module.exports = router;