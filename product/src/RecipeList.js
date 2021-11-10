import React from "react";
import './App.css';
import { useLocation } from "react-router-dom";
import recipeNames from "./Recipes";


function RecipeList(){

        let query = new URLSearchParams(useLocation().search);
        let recipe = query.toString().slice(7);
        recipe = recipe.replace(/\+/g, '%20');
        recipe = decodeURIComponent(recipe);
        let recipeArray = recipeNames(recipe);

        return(
        <div className= "Recipes">
            <body> 
                <ul>
                    {recipeArray.map(recipeArray => {
                        return(
                            <li className = "List" key={recipeArray.ingredient_name}>{recipeArray.ingredient_name}</li>                
                        );
                    })}
                </ul>   
            </body>     
        </div>
    );
}

export default RecipeList;