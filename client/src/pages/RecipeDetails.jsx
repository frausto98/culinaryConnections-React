// useParams gets the current params variable's value from the URL
import { Link, useParams, Navigate } from "react-router-dom";
import { useMutation, useQuery, } from "@apollo/client";

import { SINGLE_RECIPE, } from "../utils/queries";
import { REMOVE_RECIPE, LEAVE_LIKE } from "../utils/mutations";

import Auth from "../utils/auth";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import LikeButton from "../components/LikeButton";

const styles = {
    recipeInfo: {
        borderStyle: "dotted ",
        borderWidth: "2px",
        borderColor: "red",
        background: "lightgrey",
        color: "black",
        marginTop: "15px",
        marginBottom: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
        borderRadius: "15px"
    },
    commentInfo: {
        borderStyle: "dotted ",
        borderWidth: "2px",
        borderColor: "red",
        background: "lightgrey",
        color: "black",
        marginTop: "15px",
        marginBottom: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
        borderRadius: "15px"
    }
}

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
        pollInterval: 500
    })

    const recipe = data?.recipe || {}

    const username = recipe.recipeAuthor

    const likes = recipe.likes

    const authUser = Auth.loggedIn() && Auth.getProfile().data.username === username;

    // code for removing recipe

    const [removeRecipe] = useMutation(REMOVE_RECIPE)

    const removeRefresh = async () => {
        try {
            await removeRecipe({
                variables: {
                    recipeId: recipeId,
                }
            });
            window.location.assign('/home')
        } catch (err) {
            console.log(err)
            alert(err)
        }

    }

    // ************************

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div style={styles.recipeInfo}>
                <div>
                    <div>
                        <Link className="linkBtn" to='/home'>Back to Home</Link>
                    </div>
                    {authUser ? (
                        <>
                            <button onClick={removeRefresh}>Delete Your Post</button>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
                <div>
                    <div>
                        <h3> {recipe.recipeName} </h3>
                        <p> {recipe.recipeDescription} </p>
                        <h4> Recipe Difficulty: {recipe.recipeDifficulty} </h4>
                    </div>
                    <div>
                        <p> Number of Ingredients: {recipe.ingredientCount} </p>
                        <p> {recipe.ingredients} </p>
                    </div>
                    <div>
                        <p> Number of Steps: {recipe.stepCount} </p>
                        <p> Steps to Cook: {recipe.steps} </p>
                    </div>
                    <div>
                        <h3>
                            <Link className="linkBtn" to={`/users/${username}`}>
                                {recipe.recipeAuthor}
                            </Link> cooked this post on {recipe.createdAt}
                        </h3>
                    </div>
                </div>
                <div>
                    {/* code for like button */}
                    <LikeButton/>
                    <span> Likes: {likes.length}</span>
                </div>
                <div style={styles.commentInfo}>
                    <h3> Comment Section </h3>
                    <CommentList />
                    <CommentForm />
                </div>
            </div>
        </>
    )
}

export default RecipeDetails