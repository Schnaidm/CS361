import './App.css';
import RecipeList from "./RecipeList";
import recipeNames from "./Recipes";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function IngredientList(){
    var query = new URLSearchParams(useLocation().search);
    query = query.toString().replace(/\+/g, '%20');
    query = decodeURIComponent(query)
    var recipe = query.toString().slice(7);
    return(
        <body>
            <h1>
                Shopping List.
            </h1>
            <h3>
                Ingredients for {recipe}
            </h3>  
            <> 
            {<RecipeList recipeNames={recipeNames}></RecipeList>}
            </>
            <p>
            <Link className="App-link" to = "/"> Return to the homepage</Link>
            </p>
        </body>
    );
}

export default IngredientList;