import React, { useState } from 'react';
 
function FormClient() {
    const [repasType, setRepasType] = useState('');
    const [diet, setDiet] = useState('');
    const [maxCalories, setMaxCalories] = useState(0);
 
    const handleChangeRepasType = (event) => {
        setRepasType(event.target.value);
    };
 
    const handleChangeDiet = (event) => {
        setDiet(event.target.value);
    };
 
    const handleChangeMaxCalories = (event) => {
        setMaxCalories(event.target.value);
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Repas Type:', repasType);
        console.log('Diet:', diet);
        console.log('Max Calories:', maxCalories);
    };
 
    return (
        <div>
            <form className="container mt-3 rounded" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="mealType">Type de repas :</label>
                    <select className="form-control" id="repasType" value={repasType} onChange={handleChangeRepasType}>
                        <option value="Junk food">Junk food</option>
                        <option value="Santé">Santé</option>
                        <option value="Aucune préférence">Aucune préférence</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="dietType">Type de diète :</label>
                    <select className="form-control" id="diet" value={diet} onChange={handleChangeDiet}>
                        <option value="Vegan">Végan</option>
                        <option value="Vegetarien">Végétarien</option>
                        <option value="Aucune préférence">Aucune préférence</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="maxCalories">Calorie maximal</label>
                    <input type="number" className="form-control" id="maxCalories" value={maxCalories} onChange={handleChangeMaxCalories} placeholder="0"/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    );
}
 
export default FormClient;
 