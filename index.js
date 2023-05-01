const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors({
    origin:'*',
}))
let dbUsers = []

app.get('/',(req,res)=>{
    res.send("server running")
})
app.get('/users',(req,res)=>{
    res.send(dbUsers)
})







const port = 2500 || process.env.Port
app.listen(port,()=>console.log(`server running on ${port}`))