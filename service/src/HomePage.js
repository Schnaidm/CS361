import './App.css';
import recipeNames from "./Recipes";
import React, { useState } from "react";
import ingredientList from "./IngredientList";
import {database} from './RecipeComponents';

function HomePage(){
    const [chosen, setRecipe] = useState ('');
    return(
        <body>  
            <form action="/ingredientlist" method="GET">
                <fieldset>
                    <label>Please enter the recipe json here:
                        <input type ="text" name="chosen" id="chosen" required = "required"
                        onChange={e => setRecipe(e.recipeIngredients)}/>
                    </label>
            </fieldset>
                <button classname="button" onClick= {e => {
                    setRecipe(e.target.value.recipeIngredients);   
                }}> Get the Ingredients!</button>
            </form>
        </body>
    );
}

export default HomePage;