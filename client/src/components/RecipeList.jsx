import { Link } from "react-router-dom";

const styles = {
    recipeBox: {
        borderStyle: "dotted ",
        borderWidth: "2px",
        borderColor: "red"
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
                            
                            <div className="recipeHeader">
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