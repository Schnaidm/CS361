function ProcessFile() {
    var recipes = ["Roasted Chicken", "Baked Potatoes", "Ice Cream"];
    
    var allText = [];
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "file:///C:\Users\schna\Documents\text.csv", true);
    allText = txtFile.responseText;
 
    

    //var rows = [];
    //rows = allText.split(/rn|n/);
   // var csvArray = [];

    //for (var i = 1; i < rows.length; i++) {
    //    csvArray.push(rows[i].split(','));
  //  };

 //   for(var j = 0; j < csvArray.length; j++){
      //  recipes.push(csvArray[j]);
 //   };

    return (
        recipes
    );
};



var recipeNames = ProcessFile();



export default recipeNames;