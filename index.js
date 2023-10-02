const express = require('express')
const app = express()

app.get('/', function (req,res) {
    res.send('Hello World')
})

app.get('/profile/:nama', function(req,res) {
    res.send('hi saya kevinsan nama '+req.params.nama)
})

app.get('ab?cd', function(req,res){
    res.send('ab?cd')
})

app.get('/datamhs', function(req,res){
    let listmhs = [{
        nama : "Kevin Sanjaya",
        "npm" : "2024240007"
    }]
    res.json(listmhs);
})

app.listen(3000)