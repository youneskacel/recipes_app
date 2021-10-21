import React , {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




const SearchBar = (props) =>{
   const [input,setInput]= useState("")
   
   return (

   <div className="searchCont">
       <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e)=>{setInput(e.target.value)}} />
       <Button variant="contained" onClick={() => {props.getRecipes(input)}}>Search</Button>

    </div>
   )
}
export default SearchBar