import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'


const app =express();
dotenv.config();

app.use(bodyParser.json({limit:'30mb' , extended  : true}));

app.use(bodyParser.urlencoded({limit:'30mb' , extended  : true}));
app.use(cors());
app.use('/posts' , postRoutes);

const URL =  'mongodb+srv://memories:memories123@memories.hhewkm2.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.URL, {
    useNewUrlParser : true ,
    useUnifiedTopology : true
})
.then(()=> app.listen(PORT),console.log("Server is Running"))
.catch((error)=> console.log(error.message));
