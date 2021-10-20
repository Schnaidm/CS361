import './App.css';
import HomePage from "./HomePage";
import React, { useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import IngredientList from "./IngredientList";

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/ingredientlist">
              <IngredientList />
            </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;

