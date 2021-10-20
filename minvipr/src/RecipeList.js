import React from "react";
import './App.css';

function RecipeList({ recipeNames }){
        return(
        <div className= "Recipes">
            <body> 
                <ul>
                    {recipeNames.map((recipeNames) => {
                        return(
                            <li>{recipeNames}</li>                
                        );
                    })}
                </ul>   
            </body>     
        </div>
    );
}

export default RecipeList;