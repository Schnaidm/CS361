import {React, useState, useEffect} from "react";
import './App.css';
import { useLocation } from "react-router-dom";
import {database} from "./RecipeComponents"; 

let urls = [
    'https://www.allrecipes.com/recipe/20144/banana-banana-bread/',
    'https://www.allrecipes.com/recipe/229733/simple-roasted-butternut-squash/',
'https://www.allrecipes.com/recipe/20963/oven-roasted-potatoes/',
'https://www.allrecipes.com/recipe/24771/basic-mashed-potatoes/',
'https://www.allrecipes.com/recipe/230103/buttery-garlic-green-beans/',
'https://www.allrecipes.com/recipe/214931/oven-roasted-asparagus/',
'https://www.allrecipes.com/recipe/245524/dry-brine-turkey/',
'https://www.allrecipes.com/recipe/83557/juicy-roasted-chicken/',
'https://www.allrecipes.com/recipe/8985/spanish-rice-chicken-i/',
'https://www.allrecipes.com/recipe/9191/pumpkin-soup/',
'https://www.allrecipes.com/recipe/23439/perfect-pumpkin-pie/',
'https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/',
'https://www.allrecipes.com/recipe/9870/easy-sugar-cookies/',
'https://www.allrecipes.com/recipe/14231/guacamole/'
];

function RecipeList(){

       var query = new URLSearchParams(useLocation().search);
        query = query.toString().replace(/\+/g, '%20');
        query = decodeURIComponent(query)
        var recipe = query.toString().slice(7);
        
        const [isLoading, setLoading] = useState(true);
        const [recipes, setrecipes] = useState();
        const [Images, setImages] = useState();

        let url;
		for (let i = 0; i < database.length; i++) {
			if (database[i].toLowerCase() === recipe.toLowerCase()){
				url = urls[i];
			};
		};
		let post = {'URL' : ''};
		post["URL"] =  url;
        let image = {'recipe' : {'recipe_url' : ''}};
        image["recipe"]["recipe_url"] = url;

        useEffect(() => {
            fetch('https://cs360-recipe-image-finder.herokuapp.com/', {
            method: "POST",	
            mode : "cors",
            headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
            },
                
            body: JSON.stringify(image),
            })
            .then(function(response) {
                return response.json();
            })
            .then (function(data){
                let picture = data.recipe.image_url;
                setImages(picture);
            })
            .then(
            fetch('https://cs361recipescraper.herokuapp.com/scrape', {
			method: "POST",	
			mode : "cors",
			headers: {
				"Accept" : "application/json",
				"Content-Type" : "application/json"
			},
			
			body: JSON.stringify(post),
            })
            .then(function(response) {
                return response.json();
            })
            .then (function(data){
                let recipe = data.recipe.recipeIngredients;
                setrecipes(recipe);
                setLoading(false);
            })
            );
          
        }, []);


        if (isLoading){
            return <div className="App">Loading...</div>;
        }

        return(
        <div className= "Recipes">
            <body> 
                <img src={Images} alt = "new"/>
                <ul>
                    {recipes.map(recipes => {
                        return(
                            <li className = "List" key={recipes}>{recipes}</li>                
                        );
                    })}
                </ul>   
            </body>     
        </div>
    );
}

export default RecipeList;