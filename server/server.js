const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const PORT = 3000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) =>{
 res.send('hello from server')
})

app.post('/enroll', (req,res) =>{
    console.log(req.body)
    res.status(200).send({"Message": "Data Received"})
})

app.listen(PORT, (req,res) =>{
    console.log('SERVER rumming on localhost'+ PORT)
})