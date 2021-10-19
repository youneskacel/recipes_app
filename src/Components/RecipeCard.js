import {useState} from 'react'
import './RecipeCard.css'

const RecipeCard = (props) =>{
   const [det , setDet] = useState(false)
    return(
        <div className={`recipeCard ${det ? ("widthDet") : ("")}`}>
           <div className="basicDetails">

            <h3 className="label">{props.recipe.label}</h3>
            <img src={props.recipe.image}alt="" />
            <p>Origin : {props.recipe.cuisineType}</p>
            <span>Apport energetique : {Math.floor(props.recipe.calories)} kCal</span>
            <p>Source : {props.recipe.source} </p>
            <button onClick={()=> setDet(!det)} >More Details .. </button>
           </div>
            {det && (

            <div className="moreDetails">
                <div className="digest">
                    {props.recipe.digest.map((e,index) =>  {
                        return <span key={index}>{e.label} : {Math.floor(e.total)} {e.unit} <br/></span>
                    })}
                </div>
            </div>
            )}

        </div>
    )
}

export default RecipeCard