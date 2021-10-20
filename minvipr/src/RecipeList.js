import React from "react";
import './App.css';
import { useLocation } from "react-router-dom";


function RecipeList({ recipeNames }){

        var query = new URLSearchParams(useLocation().search);
        query = query.toString().replace(/\+/g, '%20');
        query = decodeURIComponent(query)
        var recipe = query.toString().slice(7);

        var recipeArray = ["empty"];
        for (var i = 0; i < recipeNames.length; i++) {
            if (recipeNames[i][0] === recipe) {
                recipeArray = recipeNames[i].slice(1);
            };
        };

        return(
        <div className= "Recipes">
            <body> 
                <ul>
                    {recipeArray.map(recipeArray => {
                        if (recipeArray === "empty") {
                            return(
                                <p>We cannot find the requested recipe. Please return home to retry.</p>
                            );
                        } else {
                            return(
                                <li>{recipeArray}</li>                
                            );
                        }
                    })}
                </ul>   
            </body>     
        </div>
    );
}

export default RecipeList;