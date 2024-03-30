import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { ADD_RECIPE } from "../utils/mutations";

const styles = {
    input: {
        height: "20px",
        width: "300px",
    },
    textArea: {
        resize: "none",
        height: "100px",
        width: "300px",
    }
}

const RecipeForm = () => {
    // set the form state upon load
    const [recipeFormData, setRecipeFormData] = useState({
        recipeName: '',
        recipeDifficulty: '',
        recipeDescription: '',
        stepCount: '',
        steps: '',
        ingredientCount: '',
        ingredients: '',
    })

    const [addRecipe, { error }] = useMutation(ADD_RECIPE);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setRecipeFormData({...recipeFormData, [name]: value})
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addRecipe({
                variables: {
                    ...recipeFormData
                }
            })
        } catch (err) {
            console.log(err)
            alert(err)
        }

        setRecipeFormData({
            recipeName: '',
            recipeDifficulty: '',
            recipeDescription: '',
            stepCount: '',
            steps: '',
            ingredientCount: '',
            ingredients: '',
        })
    }

    return (
        <>
            <div>
                <h3>What did you cook up?</h3>
            </div>
            <div>
                <form>
                    <fieldset>
                        <legend>Recipe Basics</legend>
                        <label>
                            Recipe Name:
                            <input
                                type="text"
                                name="recipeName"
                                id="recipeName"
                                placeholder="Your recipe name is..."
                                //value
                                //onChange
                                style={styles.input}
                                required />
                        </label>
                        <label>
                            Recipe Difficulty:
                            <input
                                type="number" max={10} min={0}
                                name="recipeDifficulty"
                                id="recipeDifficulty"
                                //value
                                //onChange
                                required />
                        </label>
                        <br />
                        <label>
                            Recipe Description:
                            <textarea
                                name="recipeDescription"
                                id="recipeDescription"
                                placeholder="Please describe your recipe..."
                                //value
                                //onChange
                                style={styles.textArea}
                                required>
                            </textarea>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Recipe Steps</legend>
                        <label>
                            Step Count:
                            <input
                                type="number" max={10} min={0}
                                name="stepCount"
                                id="stepCount"
                                //value
                                //onChange
                                required />
                        </label>
                        <br />
                        <label>
                            Steps:
                            <textarea
                                name="steps"
                                id="steps"
                                placeholder="Describe the steps the took..."
                                //value
                                //onChange
                                style={styles.textArea}
                                required>
                            </textarea>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Recipe Ingredients</legend>
                        <label>
                            Ingredient Count:
                            <input
                                type="number" max={10} min={0}
                                name="ingredientCount"
                                id="ingredientCount"
                                //value
                                //onChange
                                required />
                        </label>
                        <br />
                        <label>
                            Ingredients:
                            <textarea
                                name="ingredients"
                                id="ingredients"
                                placeholder="Please list out your ingredients..."
                                //value
                                //onChange
                                style={styles.textArea}
                                required>
                            </textarea>
                        </label>
                    </fieldset>
                </form>
            </div>
            <div>
                <Link className="linkBtn" to='/home'>Back to Home</Link>
            </div>
        </>
    )
};

export default RecipeForm