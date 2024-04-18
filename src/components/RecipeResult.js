import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function RecipeResult() {
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

    useEffect(() => {
        handleDescription();
    }, []);


    // Get recipes

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
        getAllrecipes();
    }, []);

    return (
        <div className="text-center mt-5 p-2">
            <h2>Vous pesez {location.state.weight} lbs, vos plats serons {preferenceDesc}, vous souhaitez {goalDesc} et le temps maximum par repas sera {tempsDesc}.</h2>
            <h3 className="pt-3"><u>Voici nos recommendations!</u></h3>
            <div className='row'>
                {recipes.map((recipe) => (
                    <div className='col-lg-4 col-md-6 mb-4'>
                       <Link to={`/catalogue/${recipe.recipe_name.replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
                            <div className='card'>
                                <img className='card-img-top' src={recipe.img} alt={recipe.recipe_name} style={{ height: '350px' }} />
                                <div className='card-body' style={{height: '200px'}}>
                                    <h5 className='card-title mt-2'>{recipe.recipe_name}</h5>
                                    <p className='card-text mt-2'>Calories: {recipe.calories}</p>

                                    <p className='card-text mt-2'>{recipe.descriptions}</p>
                                    <p className='card-text text-end mt-4'><i class="bi bi-clock"></i> {recipe.preparationTime}</p>
                                </div>
                            </div>
                       </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeResult;