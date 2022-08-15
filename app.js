const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send('hi')
})

app.get('/hello',(req,res)=>{
    res.send('hello world')
})

app.listen(5000,()=>{
    console.log('listing on port 5000')
})