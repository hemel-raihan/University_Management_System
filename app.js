const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const studentskill = require('./controller/student/studentskill');
const studentlogin = require('./controller/student/studentlogin');
const studentDashboard = require('./controller/student/studentDashboard');

const app = express();

//SetUp View Engine
app.set('view engine','ejs');
app.set('views','views');

//middleware Array
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended: true}),
    express.json()
]

app.use(middleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use('/skill',studentskill);
app.use('/studentlogin',studentlogin);
app.use('/studentdashboard',studentDashboard);


app.get('/',function(req,res){
    res.render('pages/home');
});



const PORT = process.env.PORT || 5050;
app.listen(PORT, function ()
{
    console.log(`server running ${PORT}`);
});