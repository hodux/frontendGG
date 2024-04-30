import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/recipeDetail.css';

function RecipeDetail() {
    const [recipe, setRecipe] = useState({});
    const { recipe_ID } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:7373/recettes/${recipe_ID}`)
            .then((res) => {
                console.log(res);
                setRecipe(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [recipe_ID]);

    return (
        <div className="container border-0 mt-4 mb-4">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img className='image img-fluid' src={recipe.img} alt={recipe.recipe_name} />
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className='ms-3 info'>
                        <h1>{recipe.recipe_name}</h1>
                        <p><i className="bi bi-clock"></i> &nbsp;{recipe.preparationTime}</p>
                        <p>Vegan {recipe.isVegan ? <i className="bi bi-check-lg"></i> : <i className="bi bi-ban"></i>}</p>
                        <p>Végétarien {recipe.isVegetarian ? <i className="bi bi-check-lg"></i> : <i className="bi bi-ban"></i>}</p>
                        <p>Calories: {recipe.calories}</p>
                        <h2>Description </h2>
                        <p>{recipe.descriptions}</p>
                        <h2>Ingredients</h2>
                        <p>{recipe.ingredients}</p>
                        <h2>Instruction</h2>
                        <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;
