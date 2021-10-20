import './App.css';
import RecipeList from "./RecipeList";
import recipeNames from "./Recipes";
import React, { useState } from "react";
import ingredientList from "./ingredientList";

function HomePage(){
    const [chosen, setRecipe] = useState ('');
    return(
        <body>
            <h1>
                Welcome to the Shopping List website.
            </h1>
            <h3>
                Please see the below list of recipes in our system.
            </h3>
                        
            <script>
            console.log("hi");
            </script>
            <> 
            {<RecipeList recipeNames={recipeNames}></RecipeList>}
            </>
            <form action="/ingredientlist" method="GET">
                <fieldset>
                    <label>Please enter the recipe you would like to see the ingredients of:
                        <input type ="text" name="chosen" id="chosen" required = "required"
                        onChange={e => setRecipe(e.target.value)}/>
                    </label>
            </fieldset>
                <button onClick= {e => {
                    setRecipe(e.target.value);      
                }}> Get the Ingredients!</button>
            </form>
        </body>
    );
}

export default HomePage;