// Import Express
const express = require('express')

// Import Router
const urlRouter = require('./routes/url')

// Create express object
const app = express()

// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css, images อยู่ path ไหน
app.use(express.static('assets'))

// เรียกใช้งาน Router
app.use('', urlRouter)

app.get('/api/restaurants',(req,res)=>{
    res.send('GET API')
})

app.post('/api/restaurants',(req,res)=>{
    res.send('POST API')
})

app.put('/api/restaurants',(req,res)=>{
    res.send('PUT API')
})
// Run express server
app.listen(3000, ()=> {
    console.log('Listening to port 3000')
})