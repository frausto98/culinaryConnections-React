const RecipeList = ({ recipes }) => {
    if (!recipes.length) {
        return <span> No Recipes... </span>
    }

    return (
        <>
            <div>
                {recipes &&
                    recipes.map((recipe) => (
                        <div key={recipe._id} className="recipe">
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
                                <p> Number of Ingredients: {recipe.ingredientCount} </p>
                                <p> {recipe.ingredients} </p>
                            </div>
                            <div>
                                <p> Number of Steps: {recipe.stepCount} </p>
                                <p> Steps to Cook: {recipe.steps}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default RecipeList