const express= require('express');
const app= express();
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const PORT=4300;

app.set('views','./views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use('/',require('./route/route'));
app.use(cookieParser());


app.listen(PORT,()=>{
    console.log(`The server is up and runnnig at ${PORT}`);

})

