import express from "express";
import {PORT, mongoDbUrl} from './config.js';

const app = express();

app.get('/', (req, res) => {
    return res.status(234).send("Welcome to MERN Stack tutorial");
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});