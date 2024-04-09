import Recipe from './Recipe.jsx';
import { useState } from 'react';
import recipes from './recipes.js';

export default function RecipeList(laClasse) {
    const userSelection = localStorage.getItem("selection");
    const [selectedFoods, setSelectedFoods] = useState(userSelection ? JSON.parse(userSelection) : []);

    const MIN_MATCHES = 2; // Set the minimum number of matches required

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.filter(ingredient =>
            selectedFoods.includes(ingredient)
        ).length >= MIN_MATCHES
    );


    return (
        <>
            <div className='recipe-list-div'>
                {filteredRecipes.map((recipe) => (
                    <Recipe
                        key={recipe.id}
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                        explanation={recipe.explanation}
                    />
                ))}
            </div>
        </>
    )
};
