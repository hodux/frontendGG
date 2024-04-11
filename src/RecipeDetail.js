import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const [recipe, setRecipe] = useState([]);
    const { recipeName } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const originalRecipeName = recipeName.replace(/-/g, ' ');
                const response = await axios.get(`http://localhost:7373/getrec/${originalRecipeName}`);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [recipeName]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{recipe.recipe_name}</h2>
            <img src={recipe.img} alt={recipe.recipe_name} />
            <p>Calories: {recipe.calories}</p>
            <p>{recipe.descriptions}</p>
        </div>
    );
}

export default RecipeDetails;
