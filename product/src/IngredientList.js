import './App.css';
import RecipeList from "./RecipeList";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {database} from './RecipeComponents';

function IngredientList(){
    var query = new URLSearchParams(useLocation().search);
    query = query.toString().replace(/\+/g, '%20');
    query = decodeURIComponent(query)
    var recipe = query.toString().slice(7);
    let found = 0;
    for (let i = 0; i < database.length; i++) {
        if (database[i].toLowerCase() === recipe.toLowerCase()){
            found = 1;
        };
    };
    
    if (found === 1){
        return(
            <body className="Shoppinglist">
                <h1 className="title">
                    Shopping List
                </h1>
                <h2>
                    {recipe}
                </h2>
                <> 
                {<RecipeList></RecipeList>}
                </>
                <p>
                <Link className="App-link" to = "/"> Return to the homepage</Link>
                </p>
            </body>
        );
    } else {
        return(
            <body className="Shoppinglist">
                <h1 className="title">
                    Shopping List
                </h1>
                <h2>
                    {recipe}
                </h2>
                <> 
                   Recipe was not found
                </>
                <p>
                <Link className="App-link" to = "/">Select to try again</Link>
                </p>
            </body>
        );
    };
}

export default IngredientList;