import React from "react";
import './App.css';
import { useLocation } from "react-router-dom";
import recipeNames from "./Recipes";
import {database} from './RecipeComponents';


function RecipeList(){

    let query = new URLSearchParams(useLocation().search);
    let recipe = query.toString().slice(7);
    recipe = recipe.replace(/\+/g, '%20');
    recipe = decodeURIComponent(recipe);  
    let found = 0;
    alert(query);
    return(
        <body>
            {JSON.stringify({"Error" : "Recipe not found"})}
        </body>
    ); 
}

export default RecipeList;