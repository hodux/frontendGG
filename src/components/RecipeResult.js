import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import './catalogue.css'

function Catalogue() {
    const location = useLocation();
    const [preferenceDesc, setPreferenceDesc] = useState("");
    const [goalDesc, setGoalDesc] = useState("");
    const [tempsDesc, setTempsDesc] = useState("");
    const handleDescription = () => {
        try {
            if (location.state.preference == 0) {
                setPreferenceDesc("diverse")
            } else if (location.state.preference == 1) {
                setPreferenceDesc("strictement Végétarien")
            } else if (location.state.preference == 2) {
                setPreferenceDesc("strictement Végétalien")
            }
    
            if (location.state.goal == 0) {
                setGoalDesc("ni gain ou perte de poids")
            } else if (location.state.goal == 1) {
                setGoalDesc("perdre du poids")
            } else if (location.state.goal == 2) {
                setGoalDesc("obtenir du poids")
            }
    
            if (location.state.time == 0) {
                setTempsDesc("sans importance")
            } else if (location.state.time == 1) {
                setTempsDesc("30 minutes")
            } else if (location.state.time == 2) {
                setTempsDesc("60 minutes")
            } else if (location.state.time == 3) {
                setTempsDesc("120 minutes")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const [recipes, setrecipes] = useState([]);

    const getAllrecipes = () => {
        axios.get("http://localhost:7373/getrec")
            .then((res) => {
                setrecipes(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

 
    useEffect(() => {
        handleDescription();
        getAllrecipes();
    }, []);

    return (
        <div className='container mt-4 container-recipes text-center p-2'>
            <h2>Vous pesez {location.state.weight} lbs, vos plats serons {preferenceDesc}, vous souhaitez {goalDesc} et le temps maximum par repas sera {tempsDesc}.</h2>
            <h3 className="pt-3"><u>Voici nos recommendations!</u></h3>
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
