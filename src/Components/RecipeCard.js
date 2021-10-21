import { useState } from "react";
import "./RecipeCard.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

const RecipeCard = (props) => {
  const [det, setDet] = useState(false);
  return (
    <div className={`recipeCard ${det ? "widthDet" : ""}`}>
      <div className="basicDetails">
        <h3 className="label">{props.recipe.label}</h3>
        <img src={props.recipe.image} alt="" />
        <p>Origin : {props.recipe.cuisineType}</p>
        <span>
          Apport energetique : {Math.floor(props.recipe.calories)} kCal
        </span>
        <p>Source : {props.recipe.source} </p>
        <button onClick={() => setDet(!det)}>More Details .. </button>
      </div>
      {det && (
        <div className="moreDetails">
          <Collapse accordion>
            <Panel header="Valeur energetique" key="1">
              <div className="digest">
            {props.recipe.digest.map((e, index) => {
              return (
                <span key={index}>
                  {e.label} : {Math.floor(e.total)} {e.unit} <br />
                </span>
              );
            })}
          </div>
            </Panel>
            <Panel header="Ingredients" key="2">
              <ul>
                  {props.recipe.ingredients.map((e,index) =>{
                      return <li key={index}>{e.text}</li>
                  })}
              </ul>
            </Panel>
            { <Panel header="Composants" key="3">
                <ul>
                  {Object.keys(props.recipe.totalDaily).map((e,index) =>{
                      return <li key={index}>{props.recipe.totalDaily[e].label} : {Math.floor(props.recipe.totalDaily[e].quantity)} {props.recipe.totalDaily[e].unit}</li>
                  })}
              </ul>
            </Panel> }
          </Collapse>
          ,
          
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
