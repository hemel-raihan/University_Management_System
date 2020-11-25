const express = require('express');
const morgan = require('morgan');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const studentskill = require('./controller/student/studentskill');
const studentlogin = require('./controller/student/studentlogin');
const studentDashboard = require('./controller/student/studentDashboard');
const uploadfile = require('./controller/student/fileupload');
const course = require('./controller/student/course');
const logout = require('./controller/student/logout');
const library = require('./controller/student/library');
const student = require('./controller/student/student');
const notice = require('./controller/student/notice');
const order = require('./controller/student/order');
const showorder = require('./controller/student/showorder');

const app = express();

//SetUp View Engine
app.set('view engine','ejs');
app.set('views','views');

//middleware Array
const middleware = [
    morgan('dev'),
    //express.static('public'),
    express.urlencoded({extended: true}),
    express.json()
]

app.use(middleware);
app.use('/assets', express.static('assets'));
app.use(fileupload());
//app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use('/skill',studentskill);
app.use('/studentlogin',studentlogin);
app.use('/studentdashboard',studentDashboard);
app.use('/file_upload',uploadfile);
app.use('/course',course);
app.use('/logout',logout);
app.use('/library',library);
app.use('/student',student);
app.use('/notice',notice);
app.use('/order',order);
app.use('/showorder',showorder);


app.get('/',function(req,res){
    res.render('pages/home');
});



const PORT = process.env.PORT || 5050;
app.listen(PORT, function ()
{
    console.log(`server running ${PORT}`);
});