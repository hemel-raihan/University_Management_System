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



        router.get('/showskill/edit/:id',(req,res)=>{
            //if(req.session.uname != null){
            if(req.cookies['email'] != null){
                var data = {
                    email: req.session.email,
                    //email: req.body.email,
                };
               
                studentlogin.skilledit(req.params.id, function(results) {
                    
                    res.render('pages/student/skilledit', { value: results, data});
                });
               // res.render('pages/student/studentDashboard',data);
            }
            else{
                res.redirect('/studentlogin');
            }
            });


            router.post('/showskill/edit/:id', (req, res)=>{
                let fileName = req.files.file;
                let uploadPath = 'assets/images/upload/' + fileName.name;
                var user = {
                    id: req.params.id,
                    title: req.body.title,
                    file: uploadPath,
                    description: req.body.description
                };
                studentlogin.update(user, function(status) {
                    if(status)
                    {
                    console.log(fileName);
                    fileName.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
           
            res.redirect('/studentDashboard/showskill/edit/:id');
			//res.redirect('/uploadfile');
		}else{
			res.redirect('/studentDashboard/showskill/edit/:id');
		
        }
                });
            })



            router.get('/showskill/delete/:id',(req,res)=>{
                //if(req.session.uname != null){
                if(req.cookies['email'] != null){
                    var data = {
                        email: req.session.email,
                        //email: req.body.email,
                    };
                   
                    studentlogin.skilldelete(req.params.id, function(results) {
                        
                        res.render('pages/student/skilldelete', { value: results, data});
                    });
                   
                }
                else{
                    res.redirect('/studentlogin');
                }
                });



                router.post('/showskill/delete/:id', (req, res)=>{
                    
                    studentlogin.delete(req.params.id, function(status) {
                        if (status) {
                            res.redirect('/');
                        } else {
                            res.redirect('/');
                        }
                    });
                })



                router.get('/showcourses/:email',(req,res)=>{
                    //if(req.session.uname != null){
                    if(req.cookies['email'] != null){
                        var data = {
                            //email: req.session.email,
                           
                        };
                       
                        studentlogin.showcourses(req.params.email, function(results) {
                           
                            res.render('pages/student/showcourses', { value: results, data});
                        });
                       // res.render('pages/student/studentDashboard',data);
                    }
                    else{
                        res.redirect('/studentlogin');
                    }
                    });


                    router.get('/showcourses/drop/:id',(req,res)=>{
                        //if(req.session.uname != null){
                        if(req.cookies['email'] != null){
                            var data = {
                                email: req.session.email,
                                //email: req.body.email,
                            };
                           
                            studentlogin.dropshow(req.params.id, function(results) {
                                
                                res.render('pages/student/coursedrop', { value: results, data});
                            });
                           
                        }
                        else{
                            res.redirect('/studentlogin');
                        }
                        });

                        router.post('/showcourses/drop/:id', (req, res)=>{
        
                            studentlogin.coursedrop(req.params.id, function(status) {
                                if (status) {
                                    res.redirect('/');
                                } else {
                                    res.redirect('/');
                                }
                            });
                        })


                        router.get('/showborrow/:email',(req,res)=>{
                            //if(req.session.uname != null){
                            if(req.cookies['email'] != null){
                                var data = {
                                    //email: req.session.email,
                                    studentemail : req.session.email,
                                };
                               
                                studentlogin.showborrow(req.params.email, function(results) {
                                   
                                    res.render('pages/student/showborrow', { value: results, data});
                                });
                               // res.render('pages/student/studentDashboard',data);
                            }
                            else{
                                res.redirect('/studentlogin');
                            }
                            });
        

                            router.get('showorder/:id',(req,res)=>{
                                //if(req.session.uname != null){
                                //if(req.cookies['email'] != null){
                                        
                                    var data = {
                                        id: req.params.id
                                        
                                    };
                                    studentlogin.showorder(data, function(results) {
                                        res.render('pages/student/showorder',{value: results});
                                        
                                    });
                                   // res.render('pages/student/studentDashboard',data);
                               // }
                               // else{
                                   // res.redirect('/studentlogin');
                                //}
                                });


                   /* router.get('/borrow/:id',(req,res)=>{
                        //if(req.session.uname != null){
                        if(req.cookies['email'] != null){
                            var data = {
                                userid: req.session.userid,
                                //id: req.body.id,
                            };
                           
                            studentlogin.showlibraryById(req.params.id, function(results) {
                                
                                res.render('pages/student/libraryborrow', { value: results , data});
                            });
                           // res.render('pages/student/studentDashboard',data);
                        }
                        else{
                            res.redirect('/studentlogin');
                        }
                        });



                        router.post('/borrow/:id', (req, res)=>{
                           
                            var user = {
                                id: req.params.id,
                                title: req.body.title,
                                subject: req.body.subject,
                                date: req.body.date,
                                userid: req.body.userid,
                            };
                            studentlogin.borrowinsert(user, function(status) {
                                if(status)
                               
                                  {
                                       res.redirect('/');
                        
                                  }
                                else{
                                       res.redirect('/');
                    
                                    }
                            
                        });
                    });*/

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