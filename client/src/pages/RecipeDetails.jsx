// useParams gets the current params variable's value from the URL
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { SINGLE_RECIPE } from "../utils/queries";

const RecipeDetails = () => {
    // this hook will yield an object. The keys associated will match the parameters defined on each route. 
    // Its values match the current URL value in those parameter locations
    // we will take the value and put into the object for us to manipulate
    // recipeId object comes from the main.jsx page that has the matching "path"
    const {recipeId} = useParams();

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
                <h3>{recipe.recipeName}</h3>
                <p>{recipe.recipeDescription}</p>
            </div>
            <div></div>
        </div>
        </>
    )
}

export default RecipeDetails