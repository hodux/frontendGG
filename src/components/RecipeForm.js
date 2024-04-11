import React, { useState } from 'react';
import './recipeform.css';


function RecipeForm() {

const [weight, setWeight] = useState("");
const handleWeight = (event) => {
    console.log(event.target.value);
    setWeight(event.target.value);
    if (event.target.value > 800) {
        event.target.value = 800;
        setWeight(800);
    }
}

const [preference, setPreference] = useState("");
const handlePreference = (event) => {
    console.log(event.target.value);
    // 0 - None, 1 - Vegan, 2 - Vegetarian
    setPreference(event.target.value);
}

const [goal, setGoal] = useState("");
const handleGoal = (event) => {
    console.log(event.target.value);
    // 0 - None, 1 - Weight loss, 2 - Weight gain
    setGoal(event.target.value);
}

const [time, setTime] = useState("");
const handleTime = (event) => {
    console.log(event.target.value);
    // 0 - None, 1 - 30 mins, 2 - 60 mins
    setTime(event.target.value);
}

return (
    <div class="page-wrapper bg p-t-180 p-b-100">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                    <div class="card-body">
                        <h2 class="title">Let us do the heavy work!</h2>
                        <h5 class="title">We'll put together some recipes from our catalog for you.</h5>
                        <form method="POST">
                        
                        <div class="mt-2">
                        <label class="form-label">Your weight.</label>
                        <form class="form-floating">
                            <input type="number" min="0" max="800" class="form-control" id="floatingInputValue" onChange={handleWeight}></input>
                            <label for="floatingInputValue">in lbs : max 800</label>
                        </form>
                        </div>

                        <div class="mt-3">
                        <label class="form-label">Are you vegan?</label>
                        <select class="form-select" aria-label="Default select example" onChange={handlePreference}>
                            <option value="0" selected>No preference</option>
                            <option value="1">Vegan</option>
                            <option value="2">Vegetarian</option>
                        </select>
                        <div class="form-text">We won't recommend a dish that goes against your preference.</div>
                        </div>

                        <div class="mt-3">
                        <label class="form-label">Your long-term goal.</label>
                        <select class="form-select" aria-label="Default select example" onChange={handleGoal}>
                            <option value="0" selected>None</option>
                            <option value="1">Prioritize low calorie meals for weight loss</option>
                            <option value="2">High calorie meals for weight gain</option>

                        </select>
                        <div class="form-text">Our recommendations will suit your fitness goal.</div>
                        </div>

                        <div class="mt-3">
                        <label class="form-label">Maximum preparation time for meals.</label>
                        <select class="form-select" aria-label="Default select example" onChange={handleTime}>
                            <option value="0" selected>None</option>
                            <option value="1">30 minutes</option>
                            <option value="2">60 minutes</option>

                        </select>
                        </div>

                        <div class="p-t-30">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

);
}

export default RecipeForm;