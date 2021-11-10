import React from "react";
import './App.css';
import { useLocation } from "react-router-dom";
import recipeNames from "./Recipes";



function RecipeList(){

        let query = new URLSearchParams(useLocation().search);
      //  query = query.toString().replace(/\+/g, '%20');
      //  query = decodeURIComponent(query)
        let recipe = query.toString().slice(7);

        let recipeArray = recipeNames(recipe);
       
        let array = [];
        let json = {"recipe": {"name": recipeArray.name, "url" : recipeArray.recipe_url,  "shopping_list" : ""}};
        
        recipeArray.ingredients.map(recipeArray => {
            if (recipeArray === "empty") {
                    array.push("we cannot find the requested recipe");
                
            } else {
                array.push(recipeArray.ingredient_name);
            };
        });

        json.recipe.shopping_list = array;
        return(
            <body>
            {JSON.stringify(json)}
            </body>
        );
}

export default RecipeList;