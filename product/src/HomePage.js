import './App.css';
import RecipeList from "./RecipeList";
import recipeNames from "./Recipes";
import React, { useState } from "react";
import ingredientList from "./IngredientList";
import {database} from './RecipeComponents';

function HomePage(){
    const [chosen, setRecipe] = useState ('');
    return(
        <body>
            <h1>
                Welcome to the Shopping List Website.
            </h1>
            <p>
                Recipes Database:
            </p>
            <ul className = "database">
                {database.map(database => {
                    return(
                        <p  key={database}>{database}</p>                
                    );
             })}
            </ul>   
            <p>
                Using the below field, please enter a recipe in our system and we will direct you to a shopping list of its ingredients.
            </p>
            <form action="/ingredientlist" method="GET">
                <fieldset>
                    <label>Please enter the recipe here:
                        <input type ="text" name="chosen" id="chosen" required = "required"
                        onChange={e => setRecipe(e.target.value)}/>
                    </label>
            </fieldset>
                <button classname="button" onClick= {e => {
                    setRecipe(e.target.value);   
                }}> Get the Ingredients!</button>
            </form>
        </body>
    );
}

export default HomePage;