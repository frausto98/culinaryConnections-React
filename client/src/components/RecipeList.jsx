import { Link } from "react-router-dom";

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
        paddingBottom:"15px"
    },
    recipeHeader: {
        background: "grey",
        
    }
}

const RecipeList = ({ recipes,  }) => {
    if (!recipes.length) {
        return <span> No Recipes... </span>
    }

    return (
        <>
            <div>
                {recipes &&
                    recipes.map((recipe) => (
                        <div key={recipe._id} className="recipe" style={styles.recipeBox}>
                            
                            <div className="recipeHeader" style={styles.recipeHeader}>
                                <h4>
                                    {recipe.recipeAuthor} <br />
                                    <span>
                                        Cooked this post on {recipe.createdAt}
                                    </span>
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
};

export default RecipeList