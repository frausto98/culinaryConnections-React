import { Link } from "react-router-dom";

const styles = {
    recipeBox: {
        borderStyle: "dotted, dashed, solid, groove",
        borderWidth: "2px",
        borderColor: "white"
    }
}

const RecipeList = ({ recipes,  }) => {
    if (!recipes.length) {
        return <span> No Recipes... </span>
    }

    return (
        <>
            <div style={styles.recipeBox}>
                {recipes &&
                    recipes.map((recipe) => (
                        <div key={recipe._id} className="recipe">
                            <div>
                                <h3> Your Feed for Food </h3>
                            </div>
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