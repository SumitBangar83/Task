const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authroutes.js')

const PORT = process.env.PORT || 5000
const cors = require('cors')
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("mongodb Connected"))
.catch(err=>console.log(err))

app.use('/api/auth',authRoutes);


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});