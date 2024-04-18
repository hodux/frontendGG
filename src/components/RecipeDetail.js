import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './recipeDetail.css'

function RecipeDetail() {
    const [recipe, setRecipe] = useState({});
    const { recipe_ID } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:7373/getrec/${recipe_ID}`)
            .then((res) => {
                console.log(res)
                setRecipe(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [recipe_ID]);

    return (
        <div className="container mt-4 mb-4 box">
            <div>
                <img className='image' src={recipe.img} alt={recipe.recipe_name}/>
            </div>
            <div className='ms-3 info'>
           
                <h1>{recipe.recipe_name}</h1>
                <p><i className="bi bi-clock"></i> &nbsp;{recipe.preparationTime}</p>
                <p>Vegan {recipe.isVegan ? <i class="bi bi-check-lg"></i>:<i class="bi bi-ban"></i>}</p>
                <p>Végétarien {recipe.isVegetarian ? <i class="bi bi-check-lg"></i>:<i class="bi bi-ban"></i>}</p>
                <p>Calories: {recipe.calories}</p>
                <h2>Description </h2>
                <p>{recipe.descriptions}</p>
                <h2>Ingredients</h2>
                <p>{recipe.ingredients}</p>
                <h2>Instruction</h2>
                <p dangerouslySetInnerHTML={{__html:recipe.instructions}}></p>
                {/* https://legacy.reactjs.org/docs/dom-elements.html vulnérabilité xss! */}
            </div>
        </div>
    );
}


export default RecipeDetail;