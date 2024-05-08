import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import '../css/catalogue.css';
import data from "bootstrap/js/src/dom/data";

function Catalogue() {
    const location = useLocation();
    const [recipes, setRecipes] = useState([]);
    // User description
    const [preferenceDesc, setPreferenceDesc] = useState("");
    const [goalDesc, setGoalDesc] = useState("");
    const [tempsDesc, setTempsDesc] = useState("");
    const [dataDesc, setDataDesc] = useState("Voici nos recommendations!")
    // Query params
    const [calories, setCalories] = useState(400);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    function handleDataDesc(arg1, arg2) {
        if (arg1 && arg2 > 0) {
            setDataDesc("Voici nos recommendations!");
        } else {
            setDataDesc("Nous n'avons trouvé aucune recette répondant à vos critères. Désolé !");
        }
    }
    function handleAxiosGet(request) {
        axios.get(request, {})
            .then((res) => {
                setRecipes(res.data);
                handleDataDesc(res.data, res.data.length)
            }).catch((error) => {
            console.log(error);
        });
    }
    function handleRecommendations() {
        // Create User Description and Query params
        try {
            const preference = parseInt(location.state.preference)
            const goal = parseInt(location.state.goal)
            const time = parseInt(location.state.time)

            switch (preference) {
                case 0:
                    setPreferenceDesc("diverse")
                    break
                case 1:
                    setPreferenceDesc("strictement végétariens")
                    setIsVegetarian(true)
                    break
                case 2:
                    setPreferenceDesc("strictement végétaliens")
                    setIsVegetarian(true)
                    setIsVegan(true)
                    break
            }
            switch (goal) {
                case 0:
                    setGoalDesc("perdre du poids")
                    break
                case 1:
                    setGoalDesc("obtenir du poids")
                    break
            }
            switch (time) {
                case 0:
                    setTempsDesc("sans importance")
                    break
                case 1:
                    setTempsDesc("30 minutes")
                    break
                case 2:
                    setTempsDesc("60 minutes")
                    break
                case 3:
                    setTempsDesc("120 minutes")
                    break
            }

            ////////// Conditions //////////

            // no preference
            if (preference === 0 && goal === 0) {
                handleAxiosGet(`http://localhost:7373/getreclessnopref/${calories}`)
            } else if (preference === 0 && goal === 1) {
                handleAxiosGet(`http://localhost:7373/getrecgreatnopref/${calories}`)
            }

            // vegetarian or vegan
            if (preference !== 0 && goal === 0) {
                handleAxiosGet(`http://localhost:7373/getrecless/${calories}/${isVegan}/${isVegetarian}`)
            } else if (preference !== 0 && goal === 1) {
                handleAxiosGet(`http://localhost:7373/getrecgreat/${calories}/${isVegan}/${isVegetarian}`)
            }

            //////////  //////////

        } catch (error) {
            console.log(error)
        }}

        useEffect(() => {
            handleRecommendations()
        },);

        return (
            <div className='container mt-4 container-recipes text-center p-2 border-0'>
                <div>
                    <h2>
                        Vous pesez <span className="text-info">{location.state.weight} lbs</span>,
                        vos plats seront <span className="text-info">{preferenceDesc}</span>, vous
                        souhaitez <span className="text-info">{goalDesc}</span> et le temps maximum
                        par repas sera <span className="text-info">{tempsDesc}</span>.
                    </h2>
                    <p className="text-muted">Remarque : En raison d'une erreur de conception, la gestion du temps maximum ne sera implémenté dans le cadre du cours.</p>
                </div>

                <h3 className="pt-3 pb-3 lead">{dataDesc}</h3>
                <div className='row'>
                    {recipes.map((recipe) => (
                        <div className='col-lg-4 col-md-6 mb-4' key={recipe.recipe_ID}>
                            <Link to={`/catalogue/${recipe.recipe_ID}`} className='link'>
                                <div className='card'>
                                    <img className='imageCatalogue' src={recipe.img} alt={recipe.recipe_name}/>
                                    <div className='card-body'>
                                        <h5 className='mt-2 recipe-name'>{recipe.recipe_name}</h5>
                                        <p className='mt-2'>Calories: {recipe.calories}</p>
                                        <p className='mt-2'>{recipe.descriptions}</p>
                                        <p className='text-end mt-4 duration'><i
                                            className="bi bi-clock"></i> {recipe.preparationTime}</p>

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
