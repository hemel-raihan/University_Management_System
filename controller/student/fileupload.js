const express = require('express');
const studentupload = require.main.require('./model/fileupload');
const router = express.Router();

router.get('/',(req,res)=>{
    var data = {
       email: req.session.email
        
    };
    studentupload.fileupload(data, function(results) {
        res.render('pages/student/uploadfile', { data: results });
    });
});

router.post('/',(req,res)=>{

    let fileName = req.files.file;
    let uploadPath = 'assets/images/upload/' + fileName.name;

    var user =
    {
        title: req.body.title,
        file: uploadPath,
        description: req.body.description,
        id: req.body.id,
        
    };
    studentupload.insert(user, function(status){
        if(status)
        {
            req.session.id =  user.id;
            req.session.email = user.email;
            console.log(fileName);
            fileName.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
           
            res.redirect('/skill');
			//res.redirect('/uploadfile');
		}else{
			res.redirect('/uploadfile');
		
        }
    });
});



module.exports = router;