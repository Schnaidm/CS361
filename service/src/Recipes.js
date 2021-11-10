const json1 = {
	"recipe": {
		"name": "Juicy Roasted Chicken",
		"recipe_url": "https://www.allrecipes.com/recipe/83557/juicy-roasted-chicken/",
		"image_url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F09%2F389250-Juicy-Roasted-Chicken-Photo-by-Dianne-resize.jpg",
		"ingredients": [
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
		],
		"directions": [
			{
				"direction": "Preheat oven to 350 degrees F (175 degrees C)."
			},
			{
				"direction": "Place chicken in a roasting pan, and season generously inside and out with salt and pepper. Sprinkle inside and out with onion powder. Place 3 tablespoons margarine in the chicken cavity. Arrange dollops of the remaining margarine around the chicken's exterior. Cut the celery into 3 or 4 pieces, and place in the chicken cavity."
			},
			{
				"direction": "Bake uncovered 1 hour and 15 minutes in the preheated oven, to a minimum internal temperature of 180 degrees F (82 degrees C). Remove from heat, and baste with melted margarine and drippings. Cover with aluminum foil, and allow to rest about 30 minutes before serving."
			}
		],
		"nutritional_info": {
			"servings_per_recipe": 6,
			"calories": 423.1,
			"data": [
				{
					"name": "protein",
					"amount": 30.9,
					"unit": "g",
					"percentage_rda": 62
				},
				{
					"name": "carbohydrates",
					"amount": 1.2,
					"unit": "g",
					"percentage_rda": null
				},
				{
					"name": "dietary fiber",
					"amount": 0.2,
					"unit": "g",
					"percentage_rda": 1
				},
				{
					"name": "sugars",
					"amount": 0.7,
					"unit": "g",
					"percentage_rda": null
				},
				{
					"name": "fat",
					"amount": 32.1,
					"unit": "g",
					"percentage_rda": 49
				},
				{
					"name": "saturated fat",
					"amount": 7.4,
					"unit": "g",
					"percentage_rda": 37
				},
				{
					"name": "cholesterol",
					"amount": 97,
					"unit": "mg",
					"percentage_rda": 32
				},
				{
					"name": "vitamin a iu",
					"amount": 799.5,
					"unit": "IU",
					"percentage_rda": 16
				},
				{
					"name": "niacin equivalents",
					"amount": 9.6,
					"unit": "mg",
					"percentage_rda": 74
				},
				{
					"name": "vitamin b6",
					"amount": 0.5,
					"unit": "mg",
					"percentage_rda": 29
				},
				{
					"name": "vitamin c",
					"amount": 0.4,
					"unit": "mg",
					"percentage_rda": 1
				},
				{
					"name": "folate",
					"amount": 10.8,
					"unit": "mcg",
					"percentage_rda": 3
				},
				{
					"name": "calcium",
					"amount": 27.7,
					"unit": "mg",
					"percentage_rda": 3
				},
				{
					"name": "iron",
					"amount": 1.7,
					"unit": "mg",
					"percentage_rda": 9
				},
				{
					"name": "magnesium",
					"amount": 28.2,
					"unit": "mg",
					"percentage_rda": 10
				},
				{
					"name": "potassium",
					"amount": 304.8,
					"unit": "mg",
					"percentage_rda": 9
				},
				{
					"name": "sodium",
					"amount": 661.9,
					"unit": "mg",
					"percentage_rda": 27
				},
				{
					"name": "thiamin",
					"amount": 0.1,
					"unit": "mg",
					"percentage_rda": 8
				}
			]
		},
		"printer_friendly": {
			"html": "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Printer-Friendly HTML</title></head><body><h1>This is example text.</h1><p><h3>Ingredients:</h3><ul><li>Ingredient 1</li><li>Ingredient 2</li></ul></p><p><h3>Directions:</h3><ul><li>Direction 1</li><li>Direction 2</li></ul></p><p><h3>Nutritional Information:</h3><ul><li>Detail 1</li><li>Detail 2</li></ul></p></body></html>"
		},
		"shopping_list": {
			"html": "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Shopping List</title></head><body><h1>This is example text.</h1><p><h3>Things to buy:</h3><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></p></body></html>"
		}
	}
}



function ProcessFile(recipe) {

//	const json1 = request({
//	method:"GET",
//	url:http://localhost:3000/ingredientlist?chosen={recipe}
 // }).then(function (response) {
//	return response.body
 // })

    let recipes = json1.recipe;
    return (
        recipes
    );
};


export default ProcessFile;