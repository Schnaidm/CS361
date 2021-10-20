import React from "react";
import './App.css';
import RecipeList from "./RecipeList";
import recipeNames from "./Recipes";

function HomePage(){
    return(
        <body>
            <h1>
                Welcome to the Shopping List website.
            </h1>
            <p>
                Please see the below list of recipes is our system.
            </p>
                        
            <script>
            console.log("hi");
            </script>
            <> 
            {<RecipeList recipeNames={recipeNames}></RecipeList>}
            </>
            <p>
                Please choose which recipe you would like to see a shopping list for:
            </p>
        </body>
    );
}

export default HomePage;