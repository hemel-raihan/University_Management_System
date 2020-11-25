const express = require('express');
const order = require.main.require('./model/order');
const router = express.Router();

router.get('/:id',(req,res)=>{
    //if(req.session.uname != null){
    //if(req.cookies['email'] != null){
            
        var data = {
            id: req.params.id
            
        };
        order.orderinfo(data, function(results) {
            res.render('pages/student/order',{value: results});
            
        });
       // res.render('pages/student/studentDashboard',data);
   // }
   // else{
       // res.redirect('/studentlogin');
    //}
    });


    router.post('/:id', (req, res)=>{
    
        var user = {
            
            title: 	req.body.title,
            id: req.body.id,
            ownerid: req.body.studentid,
            email: req.body.email,
        };
    
        order.photoorder(user, function(status){
            if(status){
                
                //req.session.email = user.email;
                res.redirect('/skill');
            }else{
                res.redirect('/skill');
            }
        });
    });


    router.get('showorder/:id',(req,res)=>{
        //if(req.session.uname != null){
        //if(req.cookies['email'] != null){
                
            var data = {
                id: req.params.id
                
            };
            order.showorder(data, function(results) {
                res.render('pages/student/showorder',{value: results});
                
            });
           // res.render('pages/student/studentDashboard',data);
       // }
       // else{
           // res.redirect('/studentlogin');
        //}
        });


module.exports = router;