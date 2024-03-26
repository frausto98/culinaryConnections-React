import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { ADD_RECIPE } from "../utils/mutations";

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
                            <input></input>
                        </label>
                        <br/>
                        <label>
                            recipe description:
                            <input></input>
                        </label>
                        <br/>
                        <label>
                            recipe difficulty:
                            <input type="number" max={10} min={0}></input>
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