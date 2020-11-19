const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{

    res.render('pages/student/student_skill');
});

module.exports = router;