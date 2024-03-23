const RecipeList = ({ recipes }) => {
    if (!recipes.length) {
        return <span> No Recipes... </span>
    }

    return (
        <>
            <div>
                <h4> Your Feed for Food </h4>
            </div>
            <div>
                {recipes &&
                    recipes.map((recipe) => (
                        <div key={recipe._id} className="recipe">
                            <div className="recipeHeader">
                                <h5>
                                    {recipe.recipeAuthor} <br />
                                    <span>
                                        Cooked this post on {recipe.createdAt}
                                    </span>
                                </h5>
                            </div>
                            <div>
                                <p>{recipe.recipeDescription}</p>
                            </div>
                            <div>
                                <p> Number of Ingredients: {recipe.ingredientCount} </p>
                                <p> {recipe.ingredients} </p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default RecipeList