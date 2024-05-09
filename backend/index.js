import express from "express";
import {PORT, mongoDbUrl} from './config.js';
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling cors policy
app.use(cors()); // this allows all origins but seems in real project do it by setting which is allowed 

app.get('/', (req, res) => {
    return res.status(234).send("Welcome to MERN Stack tutorial");
});

app.use('/books', booksRoute);

mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });