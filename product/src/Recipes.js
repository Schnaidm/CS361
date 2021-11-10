import axios from "axios";
import React, {Component} from "react";
import {database, urls} from "./RecipeComponents"; 

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

function ProcessFile(recipe) {
		let url;
		for (let i = 0; i < database.length; i++){
			if (database[i].toUpperCase() === recipe.toUpperCase()){
				url = urls[i];
			};
		};
		let post = {'URL' : ""};
		post.URL = url;
		
		fetch('http://localhost:8080', {
			mode : "cors",
			headers: {
				'Access-Control-Allow-Origin': '*',
				"Content-Type" : "application/json"
			},
			method: "POST",
			body: JSON.stringify({"name" : "Fr", "recipeIngredients" : ["g", "G"]}),
			headers: {
				'Access-Control-Allow-Origin': '*',
				"Content-Type" : "application/json"
			},
		})
		.then(function(response) {
			return response.text();
		})
		.then (function(data){
			alert(data);
		});
		let recipes = json1.recipe.recipeIngredients;
		return (
			recipes
		);
	};


	export default ProcessFile;