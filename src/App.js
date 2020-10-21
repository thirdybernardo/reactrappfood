import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
 
const App = () => {
  const [query, setQuery] = useState("");
 

  const APP_ID = "f7c2bed8";
  const APP_KEY = "883bd1f59bb883d3c65b8af0919f7722";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
	const result = await Axios.get(url);
	   console.log(result);
	  
   /*  if (query !== "") {
      
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    } */
  
  }
  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
     <h1>Food Searching App</h1>
       <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
  
    </div>
  );
}

export default App;