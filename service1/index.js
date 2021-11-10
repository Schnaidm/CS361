'use strict';

// NOTE: Don't change the port number
const PORT = 8080;

const { json } = require("express");
const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

app.use(function (req, res, next) {
    req.headers['content-type'] = 'application/json';
    next();
});

app.post("/", (req, res) => {
    let request = req.body;
    let recipe = {"name" : "", recipeIngredients: ""};
    recipe.name = request.recipe.name;
    recipe.recipeIngredients = request.recipe.recipeIngredients
    console.log(recipe);
    res.send(req.body);  
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});