import './App.css';
import React, { useState } from "react";
import {database} from './RecipeComponents';

function HomePage(){
    const [chosen, setRecipe] = useState ('');
    return(
        <body className="Homepage">
            <h1>
                Welcome to the Shopping List Website.
            </h1>
            <h3>
                Hover over me to see the recipe database in list format:
            </h3>
            <ul className = "database">
                {database.map(database => {
                    return(
                        <p  key={database}>{database}</p>                
                    );
             })}
            </ul>   
            <p>
                Please choose a recipe from our database and <br />you will be redirected to a shopping list for its ingredients:
            </p>
            <form action="/ingredientlist" method="GET">
                <fieldset>
                    <select id="chosen" name="chosen" onChange={e => setRecipe(e.target.value)}>
                        <option>choose a recipe</option>
                    {database.map(database => {
                        return(
                            <option  key={database}>{database}</option>                
                        );
                 })}
                 </select>
            </fieldset>
                <button classname="button" onClick= {e => {
                    setRecipe(e.target.value);   
                }}> Get the Ingredients!</button>
            </form>
        </body>
    );
}

export default HomePage;