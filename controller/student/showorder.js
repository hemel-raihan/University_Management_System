const express = require('express');
const showorder = require.main.require('./model/showorder');
const router = express.Router();

router.get('/:id',(req,res)=>{
    //if(req.session.uname != null){
    //if(req.cookies['email'] != null){
            
        var data = {
            id: req.params.id
            
        };
        showorder.showorder(data, function(results) {
            res.render('pages/student/showorder',{value: results});
            
        });
       // res.render('pages/student/studentDashboard',data);
   // }
   // else{
       // res.redirect('/studentlogin');
    //}
    });


   


module.exports = router;