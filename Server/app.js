import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/user.js';


// init app
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


// routes
app.use("/user", userRouter);

// connection to database

const CONNECTION_URL = "mongodb+srv://saiicodes:8Nf1rp0zIQOr9Mme@node-tut.sjuav.mongodb.net/vienHealth?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`Did not connect. ERROR: ${error}`));