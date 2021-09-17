const express = require('express');
const path = require('path');


const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", 'ejs');

app.get('/', (req, res) =>{
    res.render('index')    
})

app.get('/about', (req, res) =>{
    res.send("This is about page");    
})

app.listen(3001, ()=> {
    console.log('Server started yess')
})