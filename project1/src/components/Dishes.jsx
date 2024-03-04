import React from "react";

const Dishes = ({ imageUrl, foodName, recipeUrl}) => {
    return (

        <div className="dishes">

            <img src={imageUrl} alt={foodName} />
            <h2>{foodName}</h2>
            <button className="recipe" onClick={() => window.location.href = recipeUrl}>View Recipe</button>

        </div>

    )
}

export default Dishes;