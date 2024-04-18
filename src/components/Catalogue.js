import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './catalogue.css'

function Catalogue() {
    const [recipes, setRecipes] = useState([]);

    const getAllRecipes = () => {
        axios.get("http://localhost:7373/getrec")
            .then((res) => {
                setRecipes(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <div className='container mt-4 container-recipes'>
            <h2 className='text-center mb-4'>Catalogue</h2>
            <div className='row'>
                {recipes.map((recipe) => (
                    <div className='col-lg-4 col-md-6 mb-4' key={recipe.recipe_ID}>
                        <Link to={`/catalogue/${recipe.recipe_ID}`}  className='link'>
                            <div className='card'>
                                <img className='imageCatalogue' src={recipe.img} alt={recipe.recipe_name}/>
                                <div className='card-body'>
                                    <h5 className='mt-2 recipe-name'>{recipe.recipe_name}</h5>
                                    <p className='mt-2'>Calories: {recipe.calories}</p>
                                    <p className='mt-2'>{recipe.descriptions}</p>
                                    <p className='text-end mt-4 duration'><i className="bi bi-clock"></i> {recipe.preparationTime}</p>

                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalogue;
