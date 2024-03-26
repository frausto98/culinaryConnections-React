import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { ADD_RECIPE } from "../utils/mutations";

const styles ={
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
                            recipe name:
                            <input
                            type="text"
                            name="recipeName"
                            id="recipeName"
                            placeholder="Your recipe name is..."
                            //value
                            //onChange
                            style={styles.input}
                            required/>
                        </label>
                        <br/>
                        <label>
                            recipe description:
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
                        <br/>
                        <label>
                            recipe difficulty:
                            <input 
                            type="number" max={10} min={0}
                            name="recipeDifficulty"
                            id="recipeDifficulty"
                            //value
                            //onChange
                            required/>
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