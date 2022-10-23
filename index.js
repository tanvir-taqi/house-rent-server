

const express = require('express')
const app = express()
const port = process.env.port || 5000
const cors = require('cors')

const districts = require('./data.json')


app.use(cors())


app.get('/',(req,res)=>{
    res.send(districts)
})


app.get('/area/:id', (req,res)=>{
    const selectedArea = districts.find(sd => sd._id == req.params.id)
    res.send(selectedArea)
})



app.listen(port,()=>{
    console.log("app is running");
})