import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { ADD_RECIPE } from "../utils/mutations";

const RecipeForm = () => {

    return (
        <>
            <span>Hello World!</span>
            <div>
                <Link className="linkBtn" to='/home'>Back to Home</Link>
            </div>
        </>
    )
};

export default RecipeForm