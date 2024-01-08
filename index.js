require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/' , (req , res)=>{
    res.send("Hello Taran !")
})

app.get('/instagram' , (req , res)=>{
    res.send('<h2>instagram handle : taranmittal_1326</h2>')
})

app.listen(port , () =>{
    // console.log(process.env)
    console.log(`server running at ${port}`)
})