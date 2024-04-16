import { Link, useLocation, } from "react-router-dom";

const styles = {
    recipeBox: {
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
    recipeHeader: {
        background: "grey",

    }
}

const RecipeList = ({ recipes, username, params }) => {

    const currentPage = useLocation().pathname;


    // i want the Link button to not be active when viewing component from the Profile element
    // i use the username prop that may or may not contain a username directly from the query data

    if (!recipes.length) {
        return <span> No Recipes... </span>
    }

    // giong to attempt conditionals to condense the code
    return (
        <>
            <div>
                {recipes &&
                    recipes.map((recipe) => (
                        <div key={recipe._id} className="recipe" style={styles.recipeBox}>
                            <div className="recipeHeader" style={styles.recipeHeader}>
                                <h4>
                                    {username ? (
                                        <>
                                            {params ? (
                                                <span>
                                                    {username}
                                                    <br />
                                                    C
                                                </span>
                                            ) : (
                                                "You c"
                                            )}ooked this post on {recipe.createdAt}
                                        </>
                                    ) : (
                                        <>
                                            {recipe.recipeAuthor}
                                            <br />
                                            Cooked this post on {recipe.createdAt}
                                        </>
                                    )}
                                </h4>
                            </div>
                            <div>
                                <h5>{recipe.recipeName}</h5>
                                <p>{recipe.recipeDescription}</p>

                            </div>
                            <div>
                                <Link className="linkBtn" to={`/recipes/${recipe._id}`}>
                                    CLick to Get more Recipe Details!
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );

    return (
        <div>
            {recipes &&
                recipes.map((recipe) => (
                    <div key={recipe._id} className="recipe" style={styles.recipeBox}>

                        <div className="recipeHeader" style={styles.recipeHeader}>
                            <h4>
                                {params ? (
                                    <span>
                                        {username}
                                        <br />
                                        C
                                    </span>
                                ) : (
                                    "You c"
                                )}ooked this post on {recipe.createdAt}
                            </h4>
                        </div>
                        <div>
                            <h5> {recipe.recipeName} </h5>
                            <p> {recipe.recipeDescription} </p>
                            <p> Recipe Difficulty: {recipe.difficulty} </p>
                        </div>
                        <div>
                            <p> Number of ingredients: {recipe.ingredientCount} </p>
                            <p> {recipe.ingredients} </p>
                        </div>
                        <div>
                            <p> Number of Steps: {recipe.stepCount} </p>
                            <p> Steps to Cook: {recipe.steps} </p>
                        </div>
                    </div>
                ))}
        </div>
    )
};

export default RecipeList