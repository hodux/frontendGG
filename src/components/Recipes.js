import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Recipe() {
    const [recette, setRecette] = useState([]);
    const [editingRecetteId, setEditingRecetteId] = useState(null);
    const [updatedRecette, setUpdatedRecette] = useState({
        recipe_ID: '',
        recipe_name: '',
        calories: '',
        isVegan: '',
        isVegetarian: '',
        descriptions: '',
        ingredients: '',
        instructions: '',
        
    });

    const getAllRecettes = () => {
        axios.get("http://localhost:7373/getrec")
            .then((res) => {
                setRecette(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const deleteRecetteById = (recipe_ID) => {
        axios.delete(`http://localhost:7373/getrec/delete/${recipe_ID}`)
            .then(() => {
                setRecette(recette.filter(recette => recette.recipe_ID !== recipe_ID));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const updateRecetteById = (recipe_ID) => {
        axios.put(`http://localhost:7373/getrec/update/${recipe_ID}`, updatedRecette)
            .then(() => {
                setRecette(recette.map(recette => {
                    if (recette.recipe_ID === recipe_ID) {
                        return { ...recette, ...updatedRecette };
                    }
                    return recette;
                }));
                setEditingRecetteId(null);
                setUpdatedRecette({
                    recipe_ID: '',
                    recipe_name: '',
                    calories: '',
                    isVegan: '',
                    isVegetarian: '',
                    descriptions: '',
                    ingredients: '',
                    instructions: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRecette(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const setEditRecette = (recette) => {
        setEditingRecetteId(recette.recipe_ID);
        setUpdatedRecette(recette);
    }

    const cancelEdit = () => {
        setEditingRecetteId(null);
        setUpdatedRecette({
            recipe_ID: '',
            recipe_name: '',
            calories: '',
            isVegan: '',
            isVegetarian: '',
            descriptions: '',
            ingredients: '',
            instructions: ''
        });
    }

    useEffect(() => {
        getAllRecettes();
    }, []);

    return (
        <div className="container mt-3">
            <h2 className="mt-5 mb-4">Recipe List</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>RecipeName</th>
                    <th>Calories</th>
                    <th>IsVegan</th>
                    <th>IsVegetarian</th>
                    <th>Descriptions</th>
                    <th>Ingredients</th>
                    <th>Instructions</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {recette.map((recette) => (
                    <tr key={recette.recipe_ID}>
                        <td>{recette.recipe_ID}</td>
                        <td>{editingRecetteId === recette.recipe_ID ?
                            <input type="text" name="recipe_name" value={updatedRecette.recipe_name} onChange={handleInputChange} className="form-control"/> : recette.recipe_name}</td>
                        <td>{editingRecetteId === recette.recipe_ID ?
                            <input type="text" name="calories" value={updatedRecette.calories} onChange={handleInputChange} className="form-control"/> : recette.calories}</td>
                        <td>{editingRecetteId === recette.recipe_ID ?
                            <input type="text" name="isVegan" value={updatedRecette.isVegan} onChange={handleInputChange} className="form-control"/> : recette.isVegan? "True":"False"}</td>
                        <td>{editingRecetteId === recette.recipe_ID ?
                            <input type="text" name="isVegetarian" value={updatedRecette.isVegetarian} onChange={handleInputChange} className="form-control"/> : recette.isVegetarian? "True":"False"}</td>
                        <td>{editingRecetteId === recette.recipe_ID ?
                            <input type="text" name="descriptions" value={updatedRecette.descriptions} onChange={handleInputChange} className="form-control"/> : recette.descriptions}</td>
                        <td>{editingRecetteId === recette.recipe_ID ?
                            <input type="text" name="ingredients" value={updatedRecette.ingredients} onChange={handleInputChange} className="form-control"/> : recette.ingredients}</td>
                        <td>{editingRecetteId === recette.recipe_ID ?
                            <input type="text" name="instructions" value={updatedRecette.instructions} onChange={handleInputChange} className="form-control"/> : recette.instructions}</td>
                        <td>
                            {editingRecetteId === recette.recipe_ID ? (
                                <>
                                    <button onClick={() => updateRecetteById(recette.recipe_ID)}
                                            className="btn btn-success m-1">Save
                                    </button>
                                    <button onClick={cancelEdit} className="btn btn-danger m-1">Cancel</button>
                                </>
                            ) : (
                                <button className="btn btn-primary m-1"
                                        onClick={() => setEditRecette(recette)}>Edit</button>
                            )}
                            <button className="btn btn-danger m-1"
                                    onClick={() => deleteRecetteById(recette.recipe_ID)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Recipe;
