import Header from './Components/Header/Header.js'
import {useState} from 'react'
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';
import axios from 'axios';
import RecipeCard from './Components/RecipeCard.js';

function App() {

  const [recipes,setRecipes] = useState(null)

  const getRecipes = async (keyword) =>{
      try{
        const response = await axios.get(
          `https://api.edamam.com/search?q=${keyword}&app_id=2dc038ad&app_key=8cfc277b86085b016d10d9b90c3af9ee&from=0&to=12`)
        { response ? setRecipes(response.data) : setRecipes(null)}    
        
      }
      catch (err){
        console.log(err)
      }
      
  }

  return (
    <div className="App">
      <Header/>
      <SearchBar getRecipes={getRecipes}/>
      {recipes ? (
        recipes.hits.map(e => {
         return <RecipeCard recipe={e.recipe}/>
          }
          )

      ): ( "No recipes")}
    </div>
  );
}

export default App;
