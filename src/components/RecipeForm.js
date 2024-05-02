import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/recipeform.css';

function RecipeForm() {

    const [weight, setWeight] = useState(0);
    const handleWeight = (event) => {
        console.log(event.target.value);
        setWeight(event.target.value);
    }

    const [preference, setPreference] = useState(0);
    const handlePreference = (event) => {
        console.log(event.target.value);
        // 0 - None, 1 - Vegan, 2 - Vegetarian
        setPreference(event.target.value);
    }

    const [goal, setGoal] = useState(0);
    const handleGoal = (event) => {
        console.log(event.target.value);
        // 0 - Weight loss, 1 - Weight gain
        setGoal(event.target.value);
    }

    const [time, setTime] = useState(0);
    const handleTime = (event) => {
        console.log(event.target.value);
        // 0 - None, 1 - 30 mins, 2 - 60 mins, 3 - 120 mins
        setTime(event.target.value);
    }

    const navigate = useNavigate();
    const [weightError, setWeightError] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            if (weight > 600 || weight < 30) {
                setWeightError("Veuillez entrer un montant entre 30 et 600");
            } else if (weight === ""){
                setWeightError("Veuillez entrer votre poids.");
            } else {
                setWeightError("");
                navigate('/your_results', { state: { weight: weight, preference: preference, goal: goal, time: time } });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div class="page-wrapper bg p-t-180 p-b-100">
            <div class="wrapper wrapper--w960">
                <div class="card card-2">
                    <div class="card-heading"></div>
                        <div class="card-body">
                            <h2 class="title">Laissez nous faire le boulot!</h2>
                            <h5 class="title">Nous allons vous créer un catalogue personnel de recettes qui vous convient</h5>
                            <form method="" onSubmit={handleSubmit}>

                            <div class="mt-2">
                            <label class="form-label">Votre poids.</label>
                            <form class="form-floating">
                                <input type="number" min="0" max="800" class="form-control" id="floatingInputValue" onChange={handleWeight}></input>
                                <label for="floatingInputValue">En livres / lbs : max 600</label>
                            </form>
                                <p className='text-danger mt-1'>{weightError}</p>
                            </div>

                            <div class="mt-3">
                            <label class="form-label">Êtes-vous végétarien?</label>
                            <select class="form-select" aria-label="Default select example" onChange={handlePreference}>
                                <option value="0" selected>Aucune préférence</option>
                                <option value="1">Végétarien</option>
                                <option value="2">Végétalien</option>
                            </select>
                            <div class="form-text">Nous ne vous recommanderons pas un plat qui va à l'encontre de vos préférences.</div>
                            </div>

                            <div class="mt-3">
                            <label class="form-label">Votre objectif à long terme.</label>
                            <select class="form-select" aria-label="Default select example" onChange={handleGoal}>
                                <option value="0" selected>Privilégiez les repas faibles en calories pour la perte de poids</option>
                                <option value="1">Repas riches en calories pour prendre du poids</option>

                            </select>
                            <div class="form-text">Nos recommandations seront adaptées à votre objectif.</div>
                            </div>

                            <div class="mt-3">
                            <label class="form-label">Temps maximum de préparation des repas.</label>
                            <select class="form-select" aria-label="Default select example" onChange={handleTime}>
                                <option value="0" selected>Aucun</option>
                                <option value="1">30 minutes</option>
                                <option value="2">60 minutes</option>
                                <option value="3">120 minutes</option>
                            </select>
                            </div>

                            <div class="p-t-30">
                                <button class="btn btn-primary" type="submit">Accepter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RecipeForm;