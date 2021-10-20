import './App.css';
import RecipeList from "./RecipeList";
import recipeNames from "./Recipes";
import React, { useState } from "react";
import ingredientList from "./IngredientList";

function HomePage(){
    const [chosen, setRecipe] = useState ('');
    return(
        <body>
            <h1>
                Welcome to the Shopping List website.
            </h1>
            <p>
                Using the below field, please enter a recipe and we will direct you to a shopping list of its ingredients.
            </p>
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