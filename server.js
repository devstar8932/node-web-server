const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res) => {
   //res.send('Hello Express');     
   res.send({
       name:'Andrew',
       Likes:[
           'Biking',
           'Cities'
       ]
   })
});

app.get('/about',(req,res) => {
    res.send('About Page');
});

app.get('/bad',(req,res) => {
    res.send({
        errorMessage:'Unable to handle request'
    });
})

app.listen(3000,() => {
    console.log('Sever is up on port 3000');
});