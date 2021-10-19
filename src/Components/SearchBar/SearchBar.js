import React , {useState} from 'react'





const SearchBar = (props) =>{
   const [input,setInput]= useState("")
   
   return (

   <div className="searchCont">
       <input type="text" name="" id="searchInput" onChange={(e)=>{setInput(e.target.value)}} />
       <button onClick={() => {props.getRecipes(input)}}>Search</button>

    </div>
   )
}
export default SearchBar