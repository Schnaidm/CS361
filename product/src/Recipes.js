
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

const json1 = {
	"recipe": {
		"name": "Juicy Roasted Chicken",
		"recipe_url": "https://www.allrecipes.com/recipe/83557/juicy-roasted-chicken/",
		"image_url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F09%2F389250-Juicy-Roasted-Chicken-Photo-by-Dianne-resize.jpg",
		"recipeIngredients": [
			{
				"ingredient_name": "whole chicken, giblets removed",
				"amount": 3,
				"amount_unit": "pounds",
				"note": null
			},
			{
				"ingredient_name": "salt and black pepper",
				"amount": null,
				"amount_unit": null,
				"note": "to taste"
			},
			{
				"ingredient_name": "onion powder",
				"amount": 1,
				"amount_unit": "tablespoon",
				"note": "or to taste"
			},
			{
				"ingredient_name": "margarine",
				"amount": 0.5,
				"amount_unit": "cup",
				"note": "divided"
			},
			{
				"ingredient_name": "celery",
				"amount": 1,
				"amount_unit": "stalk",
				"note": null
			}
		]
	}
}
async function ProcessFile(recipe) {
		let url;
		for (let i = 0; i < database.length; i++) {
			if (database[i].toLowerCase() === recipe.toLowerCase()){
				url = urls[i];
			};
		};
		let post = {'URL' : ''};
		post["URL"] =  url;
		let recipejson = await fetch('https://cs361recipescraper.herokuapp.com/scrape', {
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
			return recipe
		});
		alert(recipejson);
		return (
			json1.recipe.recipeIngredients
		);
	};


	export default ProcessFile;