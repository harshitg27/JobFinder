const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./src/routers/userRoute')
const jobRoutes = require('./src/routers/jobRoute')
const errorHandler = require('./src/middleware/errorHandler')
const cors = require('cors')
dotenv.config()

const Port = process.env.PORT || 4000 ;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/user' , userRoutes)
app.use('/job' , jobRoutes)

app.get('/health' , (req , res)=>{
    res.json({
        status: 'Success',
        message: 'APi work successfully',
        date: new Date().toLocaleDateString()
    })
})

app.use("*", (req, res) => {
    res.status(404).json({
        message: 'Endpoint not found',
        status: 'Error',
    });
});

app.use(errorHandler)

app.listen(Port , ()=>{
    console.log(`surver is running on port ${Port}`)
    mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log('DB connect successfully'))
    .catch((error) => console.log(error))
})