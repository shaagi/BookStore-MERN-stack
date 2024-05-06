import express from "express";
import {PORT, mongoDbUrl} from './config.js';
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
    return res.status(234).send("Welcome to MERN Stack tutorial");
});



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