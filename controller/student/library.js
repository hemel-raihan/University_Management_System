const express = require('express');
const library = require.main.require('./model/library');
const router = express.Router();




router.get('/',(req,res)=>{
    //if(req.session.uname != null){
    //if(req.cookies['email'] != null){
        var data = {
            studentid: req.session.studentid
        };
       
        library.showlibrary(function(results) {
            req.session.studentid =  data.studentid;
            res.render('pages/student/libraryshow', { value: results, user: data});
        });
       // res.render('pages/student/studentDashboard',data);
   // }
   // else{
      //  res.redirect('/library');
    //}
    });


    router.get('/borrow/:id',(req,res)=>{
        //if(req.session.uname != null){
        //if(req.cookies['email'] != null){
            var data = {
               studentemail : req.session.email,
               studentid : req.session.studentid
            };
           
            library.borrowbooks(req.params.id, function(results) {
                console.log(req.session.studentid);
               res.render('pages/student/libraryborrow', { value: results, user: data});
            });
           // res.render('pages/student/studentDashboard',data);
       // }
        //else{
            //res.redirect('/studentlogin');
        //}
        });




        router.post('/borrow/:id', (req, res)=>{
                           
            var user = {
               
                name: req.body.name,
                id: req.body.lid,
                bdate: req.body.bdate,
                rdate: req.body.rdate,
                studentemail: req.body.studentemail,
            };
            
            library.bookinsert(user, function(status) {
               
                if(status)
               
                  {
                       res.redirect('/');
        
                  }
                else{
                       res.redirect('/');
    
                    }
            
        });
    });



    


    module.exports = router;