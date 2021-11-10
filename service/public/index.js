'use strict';

import express, { application, json } from 'express';

const app = express();
const PORT = 300;

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


app.get("/ingredientlist", (req, res) => {
    res.contentType("application.json");    
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});