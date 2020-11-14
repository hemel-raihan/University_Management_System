const express = require('express');
const morgan = require('morgan');

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


app.get('/',function(req,res){
    res.render('pages/home');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, function ()
{
    console.log(`server running ${PORT}`);
});