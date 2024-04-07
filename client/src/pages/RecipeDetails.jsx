// useParams gets the current params variable's value from the URL
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { SINGLE_RECIPE } from "../utils/queries";

const RecipeDetails = () => {
    // this hook will yield an object. The keys associated will match the parameters defined on each route. 
    // Its values match the current URL value in those parameter locations
    // we will take the value and put into the object for us to manipulate
    // recipeId object comes from the main.jsx page that has the matching "path"
    const { recipeId } = useParams();

    const { loading, data } = useQuery(SINGLE_RECIPE, {
        // useQuery Hooks take a second arg, which is necessary to request a specific recipe.
        // the second arg is a variable object, with another child object containting the useParam value
        variables: { recipeId: recipeId },
    })

    const recipe = data?.recipe || {}

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <Link className="linkBtn" to='/home'>Back to Home</Link>
                    </div>
                </div>
                <div>
                    <h3>{recipe.recipeName}</h3>
                    <p>{recipe.recipeDescription}</p>
                    <h4> IN MY OPINION - The difficulty is: {recipe.recipeDifficulty}</h4>
                </div>
                <div>
                    <p> Number of Ingredients: {recipe.ingredientCount} </p>
                    <p>{recipe.ingredients} </p>
                </div>
                <div>
                    <p> Number of Steps: {recipe.stepCount} </p>
                    <p> Steps to Cook: {recipe.steps}</p>
                </div>
                <div>
                    <h3>{recipe.recipeAuthor} cooked this post on {recipe.createdAt}</h3>
                </div>
            </div>
        </>
    )
}

export default RecipeDetails